(function(windowGlobal) {

    /* chunk */
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

    /* slice */
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

    /* compact */
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

    /* isLength */
    const MAX_SAFE_INTEGER = 9007199254740991
    let isLength = function(value) {
        return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
    }

    /* isArrayLike */
    let isArrayLike = function(value) {
        return value != null && typeof value !== 'function' && isLength(value.length)
    }

    /* isObjectLike */
    let isObjectLike = function(value) {
        return typeof value == 'object' && value !== null
    }

    /* isArrayLikeObject */
    let isArrayLikeObject = function(value) {
        return isObjectLike(value) && isArrayLike(value)
    }

    /* baseGetTag */
    const objectProto = Object.prototype
    const hasOwnProperty = objectProto.hasOwnProperty
    const toString = objectProto.toString
    const symToStringTag = typeof symbol != 'undefined' ? Symbol.toStringTag : undefined

    let baseGetTag = function(value) {
        if (value == null) {
            return value === undefined ? '[object Undefined]' : '[object Null]'
        }
        if (!(symToStringTag && symToStringTag in Object(value))) {
            return toString.call(value)
        }
        const isOwn = hasOwnProperty.call(value, symToStringTag)
        const tag = value[symToStringTag]
        let unmasked = false
        try {
            value[symToStringTag] = undefined
            unmasked = true
        } catch (e) {}

        const result = toString.call(value)
        if (unmasked) {
            if (isOwn) {
                value[symToStringTag] = tag
            } else {
                delete value[symToStringTag]
            }
        }
        return result
    }

    /* getTag */
    const dataViewTag = '[object DataView]'
    const mapTag = '[object Map]'
    const objectTag = '[object Object]'
    const promiseTag = '[object Promise]'
    const setTag = '[object Set]'
    const weakMapTag = '[object WeakMap]'

    const dataViewCtorString = `${DataView}`
    const mapCtorString = `${Map}`
    const promiseCtorString = `${Promise}`
    const setCtorString = `${Set}`
    const weakMapCtorString = `${WeakMap}`

    let getTag = baseGetTag

    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (getTag(new Map) != mapTag) ||
        (getTag(Promise.resolve()) != promiseTag) ||
        (getTag(new Set) != setTag) ||
        (getTag(new WeakMap) != weakMapTag)) {
        getTag = (value) => {
            const result = baseGetTag(value)
            const Ctor = result == objectTag ? value.constructor : undefined
            const ctorString = Ctor ? `${Ctor}` : ''
            if (ctorString) {
                switch (ctorString) {
                    case dataViewCtorString: return dataViewTag
                    case mapCtorString: return mapTag
                    case promiseCtorString: return promiseTag
                    case setCtorString: return setTag
                    case weakMapCtorString: return weakMapTag
                }
            }
            return result
        }
    }

    /* isArguments */
    let isArguments = function(value) {
        return typeof value == 'object' && value !== null && getTag(value) == '[object Arguments]'
    }

    windowGlobal._ = {
        chunk: chunk,
        slice: slice,
        compact: compact,
        isLength: isLength,
        isArrayLike: isArrayLike,
        isObjectLike: isObjectLike,
        isArrayLikeObject: isArrayLikeObject,
        baseGetTag: baseGetTag,
        getTag: getTag,
        isArguments: isArguments
    }
})(typeof global === 'undefined' ? window : global)
