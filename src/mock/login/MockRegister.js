const userdata = JSON.parse(window.sessionStorage.getItem('userdata')) || []
export function MockRegister (option) {
  const body = JSON.parse(option.body)
  let response = {}
  if (!userdata.length) {
    response = getResponse(body, response)
  } else {
    let index = 0
    for (let i = 0; i < userdata.length; i++) {
      if (userdata[i].username === body.username) {
        index++
      }
    }
    if (index > 0) {
      response = {
        msg: '已存在该用户！！',
        error: 400
      }
    } else {
      response = getResponse(body, response)
    }
  }
  return response
}
function getResponse (body, response) {
  userdata.push({
    username: body.username,
    pwd: body.password
  })
  window.sessionStorage.setItem('userdata', JSON.stringify(userdata))
  response = {
    msg: '注册成功！',
    error: 200
  }
  return response
}
