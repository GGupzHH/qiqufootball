export function logins (option) {
  let response = {}
  let {
    username,
    password
  } = JSON.parse(option.body)
  let userdata = window.sessionStorage.getItem('userdata')
  if (userdata) {
    let usernamedata = JSON.parse(userdata)
    let index = 0
    for (let i = 0; i < usernamedata.length; i++) {
      if (username === usernamedata[i].username) {
        if (password === usernamedata[i].pwd) {
          index++
        }
      }
    }
    if (index) {
      response = {
        msg: '登录成功！',
        error: 200
      }
    } else {
      response = {
        msg: '请核对您的用户名和密码！',
        error: 400
      }
    }
  } else {
    response = {
      msg: '请先注册之后再登录！',
      error: 400
    }
  }
  return response
}
