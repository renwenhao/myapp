const ADD_GUN = '加机关枪';
const REMOVE_GUN = '减机关枪';
const RESET = '还原数据'
export function counter(state,action){
    switch(action.type){
        case ADD_GUN:
            return state+1;
        case REMOVE_GUN:
            return state-1;
        case RESET:
            return state = 10;
        default:
            return state = 10;
    }
}

export function addGun (){
    return {
        type:ADD_GUN
    }
}

export function removeGun(){
    return {
        type:REMOVE_GUN
    }
}

export function addGunAsync(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addGun());
        },2000);
    }
}

export function reset(){
   return {
       type:RESET
   }
}