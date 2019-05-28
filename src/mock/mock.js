import Mock from 'mockjs'
import { MockRegister } from './login/MockRegister'
// eslint-disable-next-line no-unused-vars
const Random = Mock.Random
/* imporat callback function */
// ***********************************************
// Mock.mock(Interface, request, fn(option)
//  * option is request body
// ***********************************************

//  * MockRegister
Mock.mock('/api/register', 'post', MockRegister)
