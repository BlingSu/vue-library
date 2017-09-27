# 前言
Lodash 源码分析与学习

1. [chunk](#chunk)
2. [slice](#slice)
3. [compact](#compact)
4. [difference](#difference)
5. [isLength](#isLength)
6. [isArrayLike](#isArrayLike)

## Array
### <span id="chunk">chunk</span>
---
chunk 接受两个参数 第一个参数是数组，第二个参数是每个块的长度，均分为大小的长度，如果不能均分，最后的就是剩余的元素。

```js
function chunk(array, size) {
    // 先拿 size的大小和0比较
    size = Math.max(size, 0)
    /* 新增：判断size是否为undefined */
    size = (typeof size === 'undefined') ? 0 : size
    // 判断数组是否为空，如果为空设长度为0 反之获取数组的长度 
    const length = array == null ? 0 : array.length
    // 如果数组的长度为0 或者size小于0的时候返回空数组
    if (!length || size < 1) {
        return []
    }

    //  定义index为数组的索引
    let index = 0
    // 定义resIndex为新生成数组的索引
    let resIndex = 0
    // 根据size生成一个新的数组result 向上取整，可能会有剩余元素的情况
    const result = new Array(Math.ceil(length / size))

    // 通过while循环不断从原数组里面去除指定长度的片段。
    while (index < length) {
        result[resindex++] = slice(array, index, (index += size))
    }
    /*
        上3行代码等于于如下   
        for(; index < length;) {
            result[resIndex] = array.slice(index, index + size)
            resIndex++;
            index = index + size
        }
    */
    return result
}

chunk(['a', 'b', 'c', 'd'], 2) 
// => [['a', 'b'], ['c', 'd']]
```

### <span id="slice">slice</span>
---
slice 接受三个参数，第一个是截取数组，第二个是截取开始位置，第三个是截取结束位置

```js
function slice(array, start, end) {
    // 判断传入的是否为数组如果是获取长度反之为0
    let length = array == null ? 0 : array.length
    // 如果数组长度为0， 则返回空的数组
    if (!length) {
        return []
    }

    /* 
    判断start和end是否存在，若存在，则传入这个值
    反之，start为0 end默认为数组的长度
    */
    start = start == null ? 0 : start
    end = end == undefined ? length : end

    /*
     判断start是否为负数，若是，比较start相反数与数组长度的大小
     如果大于 则为0 反之,为length+start的值
     相当于 从数组的后面开始数，开始截取的位置
    */
    if (start < 0) {
        start = -start > length ? 0 : (length + start)
    }
    /*
    如果end大于数组的长度，就赋值为数组的长度
    反之 判断是否小于0， 就等于end+end, 等于从后往前数结束的位置
    */
    end = end > length ? length : end
    if (end < 0) {
        end += length
    }
    /*
    如果start>end 则length = 0， 反之就把
    end-start然后向右无符号移动零位，然后把start向右无符号移动零位
    主要是变成无符号32位蒸熟，无论是负数或者小数，避免超出数组的界限
    */
    length = start > end ? 0 ((end - start) >>> 0)
    start >>>= 0

    // 定义数组索引
    let index = -1
    // 根据长度 创建新的数组
    const result = new Array(length)
    // 通过while循环 不断往新数组插入截取的新的片段
    while (++index < length) {
        result[index] = array[index + start]
    }
    return result
}

slice(['a', 'b', 'c', 'd'], 2)
// => ['c', 'd']
```

### <span id="compact">compact</span>
---
compact 接受一个参数 该参数是个数组， 用于创建一个新数组，包含原数组中所有的非假值元素

```js
function compact(array) {
    // 用来表示返回数组第索引
    let resIndex = 0
    const result = []
    
    // 若传递第数组为空 则返回空的数组
    if (array == null) {
        return result
    }

    // es6数组循环 将通过boolean转化为false的值除去
    for (const value of array) {
        if (value) {
            result[resIndex++] = value
        }
    }
    return result
}

compact([0, 1, false, 2, '', 3])
// => [1, 2 ,3]
```

### <span id="isLength">isLength</span>
---
isLength 接受一个参数，判断是该参数是否是有效的数组类长度

```js
const MAX_SAFE_INTEGER = 9007199254740991
/* value是否number且是否大于-1且除1是否为0且小于MAX_SAFE_INTEGER
    若为有效数组返回true反之false
*/
function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
}
```

### <span id="isArrayLike">isArrayLike</span>
---
isArrayLike 接受一个参数,检测是否类似数组

```js
function isArrayLike(value) {
    /* value不为空 且 不是一个function 且 长度在有效范围内
        如果value是数组类型返回true 反之false
    */
    return value != null && type value !== 'function' && isLength(value.length)
}
```
