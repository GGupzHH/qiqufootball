import Mock from 'mockjs'
import { MockRegister } from './login/MockRegister'
import { logins } from './login/MockLogin'
import { schedule } from './MockSchedule'
import { MockgetinforCenter } from './MockgetinforCenter'
import { MockgetinforMate } from './MockgetinforMate'
import { Mockmateinfor } from './Mockmateinfor'
// eslint-disable-next-line no-unused-vars
const Random = Mock.Random
/* imporat callback function */
// ***********************************************
// Mock.mock(Interface, request, fn(option)
//  * option is request body
// ***********************************************

//  * MockRegister
Mock.mock('/api/register', 'post', MockRegister)
//  * MockLogin
Mock.mock('/api/login', 'post', logins)
//  * MockSchedule
Mock.mock('/api/schedule', 'post', schedule)
//  * MockgetinforCenter
Mock.mock('/api/getinforCenter', 'post', MockgetinforCenter)
//  * MockgetinforMate
Mock.mock('/api/getinforMate', 'post', MockgetinforMate)
//  * Mockmateinfor
Mock.mock('/api/mateinfor', 'post', Mockmateinfor)
