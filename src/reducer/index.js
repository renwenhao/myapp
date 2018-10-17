//合并reducers

import {combineReducers} from 'redux'
import { counter } from './test'
import { auth } from './auth'

export default combineReducers({counter,auth})