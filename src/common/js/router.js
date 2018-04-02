/**
 * 封装header点击
 */

export default function getRouter (key, keyPath) {
  if (key == 1) {
    return '/'
  } else if (key == 'user-center') {
    return keyPath[0]
  } else {
    if (keyPath[1] == 'logout' && keyPath[0] == 3) {
      return false
    } else {
      return keyPath[1]
    }
  }
}
