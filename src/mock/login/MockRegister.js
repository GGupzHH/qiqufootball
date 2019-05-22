const userdata = JSON.parse(window.sessionStorage.getItem('userdata')) || []
export function MockRegister (option) {
  const body = JSON.parse(option.body)
  let response = {}
  if (!userdata.length) {
    response = getResponse(body, response)
  } else {
    userdata.forEach(item => {
      if (item.username === body.username) {
        response = {
          msg: '已存在该用户！！',
          error: 400
        }
      } else {
        response = getResponse(body, response)
      }
    })
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
