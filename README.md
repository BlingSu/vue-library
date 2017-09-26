# 前言
Lodash 源码分析与学习

## Array

### _.chunk
---
_.chunk 接受两个参数 第一个参数是数组，第二个参数是大小，均分为大小的长度，如果不能均分，最后的就是剩余的元素。

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
        31-33行代码等于于如下   
        for(; index < length;) {
            result[resIndex] = array.slice(index, index + size)
            resIndex++;
            index = index + size
        }
    */
    return result
}
export default chunk
```

