import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth-reducer";
import friendsReducer from "./friends-reducer";
import loading from "./loading-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";



const reducers = combineReducers({
    friends: friendsReducer,
    profile: profileReducer,
    news: newsReducer,
    auth: authReducer,
    loading: loading,
  
})

let store = createStore(reducers, applyMiddleware(thunk));
console.log(store.getState())
export default store;