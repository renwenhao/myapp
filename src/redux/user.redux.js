import axios from 'axios'
import {getPath} from '../utils'
import utils from 'utility';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ERRORMSG = 'ERRORMSG';
const RESET_STATE = 'RESET_STATE';

const initState = {
    isAuth:false,
    username:"",
    password:"",
    value:"",
    msg:'',
    redirectTo:'',
}

//reducer
export function user(state = initState,action){
    console.log('action',action);
    switch(action.type){
        case ERRORMSG:
        
            return {
                ...state,
                isAuth:false,
                redirectTo:'',
                msg:action.payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                msg:'',
                isAuth:true,
                redirectTo:getPath(action.payload.value),
                ...action.payload || {}
            }
        case RESET_STATE:
            return initState
        default : 
            return state;
    }
    
}

//action creators
function error_msg(data){
    return {
        type:ERRORMSG,
        payload:data
    }
}
function register_success(data){
    return {
        type:REGISTER_SUCCESS,
        payload:data
    }
}

function login_success(data){
    return {
        type:LOGIN_SUCCESS,
        payload:data
    }
}

export function login({username,password}){
    if(!username || !password){
        return error_msg('用户名和密码必须输入');
    }

    return dispatch=>{
        axios.post('/user/login',{
            username,password:utils.md5(password)
        }).then(res=>{
            console.log('res',res);
            if(res.status == 200 && res.data.code == 0){
                dispatch(login_success(res.data.data))
            }else{
                dispatch(error_msg(res.data.msg))
            }
        })
    }
}
export function register({username,password,repassword,value}){
    if(!username || !password || !repassword){
        return error_msg('用户名密码确认密码必须输入')
    }

    if(password != repassword){
        return error_msg('两次输入密码必须相同');
    }

    return dispatch => {
        axios.post('/user/register',{
            username,password:utils.md5(password),value
        }).then(res=>{
            console.log('res',res);
            if(res.status == 200){
                if(res.data.code == 1){
                    console.log('执行到这儿来了');
                    dispatch(error_msg(res.data.msg))
                }else{
                    dispatch(register_success(res.data))
                }
            }
        })
    }
}

export function reset_state(){
    return {
        type:RESET_STATE
    }
}