import { usersApi } from "../api/api";
import { setLoading } from "./loading-reducer";

const SET_PROFILE = 'SET_PROFILE'
const SET_PROFILE_POSTS = 'SET_PROFILE_POSTS'

let initialState = {

    profile: '',
    posts: [],
    
}

const profileReducer = (state = initialState, action) =>{
    
    switch(action.type) {
    case SET_PROFILE:{
        return {
            ...state, 
            profile: action.profile
        }
    }
    case SET_PROFILE_POSTS:{
        return {
            ...state, 
            posts: action.posts
        }
    }

    default:
        return state
    }
}


export let setProfile = (profile) => {
    return{
        type: SET_PROFILE,
        profile
    }
}

export let setProfilePosts = (posts) => {
    return{
        type: SET_PROFILE_POSTS,
        posts
    }
}

export const getProfileThunk = (id) =>{
    return (dispatch) => {
        dispatch(setLoading(true))
        usersApi.getUser(id)
        .then(data =>{
        dispatch(setProfile(data.data));
        dispatch(setLoading(false))
      })
    }
}

export const getProfilePostsThunk = (id) =>{
    return (dispatch) => {
        dispatch(setLoading(true))
        usersApi.getPostUser(id)
        .then(data =>{
        dispatch(setProfilePosts(data.data));
        dispatch(setLoading(false))
      })
    }
}


export default profileReducer;