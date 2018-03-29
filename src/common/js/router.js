/**
 * 封装header点击
 */

export default function getRouter (key, keyPath) {
  if (key == 1 || key == 2) {
    return '/'
  } else {
    return keyPath[1]
  }
}
