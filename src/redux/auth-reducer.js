import { authApi } from "../api/api";
import { setLoading } from "./loading-reducer";


const SET_AUTH = 'SET_AUTH';
const SET_ERROR = 'SET_ERROR'
const CHECK = 'CHECK'

let initialState = {
    isAuth: false,
    error: false,
    isCheck: false
}

const authReducer = (state = initialState, action) =>{

    switch(action.type) {
        case SET_AUTH:{  
        return {
            ...state,
            isAuth: action.auth
        }
        }
        case SET_ERROR:{  
        return {
            ...state,
            error: action.error
            }
        }
        case CHECK:{  
        return {
            ...state,
            isCheck: action.check
                }
            }

        default:
            return state
        }
}


export let setAuth = (auth) => {
    return{
        type: SET_AUTH,
        auth,
    }
}

export let setError = (error) => {
    return{
        type: SET_ERROR,
        error,
    }
}

export let check = (check) => {
    return{
        type: CHECK,
        check,
    }
}



export const setAuthThunk = (login, password, submit = false) =>{
    return (dispatch) => {
        dispatch(setLoading(true))
        dispatch(check(submit))
        authApi(login, password)
        .then((response) => {
            if(response){
                dispatch(setAuth(response));
                dispatch(check(false))
                dispatch(setLoading(false))
                dispatch(setError(false));
            }else{
                dispatch(setLoading(false))
                dispatch(setError(true && submit));
                dispatch(check(false))
            }
            
          });
        
        
      
    }
}

export default authReducer;