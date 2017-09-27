(function(windowGlobal) {
    let chunk = function(array, size) {
        size = Math.max(size, 0)
        size = (typeof size === 'undefined') ? 0 : size
        const length = array == null ? 0 : array.length
        if (!length || size < 1) {
            return []
        }
        let index = 0
        let resIndex = 0
        const result = new Array(Math.ceil(length / size))
        for (; index < length;) {
            result[resIndex] = array.slice(index, index + size)
            resIndex++
            index = index + size
        }
        return result
    }

    let slice = function(array, start, end) {
        let length = array == null ? 0 : array.length
        if (!length) {
            return []
        }
        start = start == null ? 0 : start
        end = end == undefined ? length : end
        if (start < 0) {
            start = -start > length ? 0 : (length + start)
        }
        end = end > length ? length : end
        if (end < 0) {
            end += length
        }
        end = end > length ? length : end
        length = start > end ? 0 : ((end - start) >>> 0)
        start >>>= 0
        let index = -1
        const result = new Array(length)
        while (++index < length) {
          result[index] = array[index + start]
        }
        return result
    }

    let compact = function(array) {
        let resIndex = 0
        const result = []
        if (array == null) {
            return result
        }
        for (const value of array) {
            if (value) {
                result[resIndex++] = value
            }
        }
        return result
    }
    
    windowGlobal._ = {
        chunk: chunk,
        slice: slice,
        compact: compact
    }
})(typeof global === 'undefined' ? window : global)
