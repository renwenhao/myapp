const LOGIN = 'LOGIN';
const LOGINOUT = 'LOGINOUT';

export function auth(state={isAuth : false,user:'renwenhao'},action){
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
        default:
            return {
                ...state
            }
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