import axios from 'axios';
const LOGIN = 'LOGIN';
const LOGINOUT = 'LOGINOUT';
const USERDATA = 'USERDATA';
export function auth(state={isAuth : false,user:'renwenhao'},action){
    console.log('state',state);
    console.log('action',action);
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                isAuth:true
            }
        case LOGINOUT:
            return {
                ...state,
                isAuth:false
            }
        case USERDATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export function getUserData(){
    return dispatch=>{
        axios.get('/userData?'+ Math.random()).then(res=>{
            console.log('res',res);
            if(res.status == 200){
                console.log('res',res);
                dispatch(user_data(res.data))
            }
        }).catch(error=>{
            console.log('error:::',error);
        })
    }
}

export function user_data(data){
    return {
        type:USERDATA,
        payload:data
    }
}

export function login(){
    return {
        type:LOGIN
    }
}

export function loginout(){
    return {
        type:LOGINOUT
    }
}