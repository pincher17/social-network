import { usersApi } from "../api/api";
import { setLoading } from "./loading-reducer";

const SET_NEWS_POSTS = 'SET_NEWS_POSTS'


let initialState = {

    posts: [],
    
}

const newsReducer = (state = initialState, action) =>{
    
    switch(action.type) {
    case SET_NEWS_POSTS:{
        return {
            ...state, 
            posts: action.posts
        }
    }

    default:
        return state
    }
}


export let setNewsPosts = (posts) => {
    return{
        type: SET_NEWS_POSTS,
        posts
    }
}

export const getNewsPostsThunk = () =>{
    return (dispatch) => {
        dispatch(setLoading(true))
        usersApi.getPosts()
        .then(data =>{
        dispatch(setNewsPosts(data.data));
        dispatch(setLoading(false))
      })
    }
}


export default newsReducer;