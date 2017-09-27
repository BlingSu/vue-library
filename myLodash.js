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
    
    windowGlobal._ = {
        chunk: chunk
    }
})(typeof global === 'undefined' ? window : global)
