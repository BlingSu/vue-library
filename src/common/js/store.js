export default function getStorage() {
  let store = {}
  store.length = window.localStorage.length

  store.set = (key, val) => {
    if (val == undefined) return store.remove(key)
      window.localStorage.setItem(key, JSON.stringify(val))
  }

  store.get = (key) => {
    return JSON.parse(JSON.stringify(window.localStorage.getItem(key)))
  }

  store.remove = (key) => {
    window.localStorage.removeItem(key)
  }

  store.key = (i) => {
    return window.localStorage.key(i)
  }

  store.each = (fn) => {
    for (let i = 0; i < store.length; i++) {
      fn.call(this, store.key(i), JSON.parse(window.localStorage.getItem(store.key(i))))
    }
  }
  return store
}
