import { usersApi } from "../api/api";
import { setLoading } from "./loading-reducer";

const SET_USERS = 'SET_USERS'


let initialState = {

    friends: [],
    
}

const friendsReducer = (state = initialState, action) =>{
    
    switch(action.type) {
    case SET_USERS:{
        return {
            ...state, 
            friends: [...action.friends]}
    }

    default:
        return state
    }
}


export let setUsers = (friends) => {
    return{
        type: SET_USERS,
        friends
    }
}

export const getFriendsThunk = () =>{
    return (dispatch) => {
        dispatch(setLoading(true))
        usersApi.getFriends()
        .then(data =>{
        dispatch(setUsers(data.data));
        dispatch(setLoading(false))
      })
    }
}


export default friendsReducer;