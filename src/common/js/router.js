/**
 * 封装header点击
 */

export function getRouter (key, keyPath) {
  if (keyPath instanceof Array)
  if (key == 1 || key == 2) {
    console.log('首页')
  } else if (keyPath[0] == 3 && key == 'userLogin') {
    console.log('登陆')
  } else if (keyPath[0] == 3 && key == 'userReg') {
    console.log('注册')
  } else if (keyPath[0] == 3 && key == 'adminLogin') {
    console.log('管理登陆')
  } else if (keyPath[0] == 3 && key == 'logout') {
    console.log('退出')
  }
}
