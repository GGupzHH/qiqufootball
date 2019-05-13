import Mock from 'mockjs'
// eslint-disable-next-line no-unused-vars
const Random = Mock.Random
// ***********************************************
// Mock.mock(Interface, request, fn(option)
//  * option is request body
// ***********************************************
//  * login
Mock.mock('/api/login', 'post', (option) => {
  let { username, password } = JSON.parse(option.body)
  return {
    username,
    password
  }
})

Mock.mock('/api/getdata', 'post', (option) => {
  let { id } = JSON.parse(option.body)
  return {
    id,
    data: [
      ['product', '2012', '2013', '2014', '2015'],
      ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
      ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
      ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
    ]
  }
})
