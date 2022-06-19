

const SET_LOADING = 'SET_LOADING';


let initialState = {

    isLoading: true

}

const loading = (state = initialState, action) =>{

    switch(action.type) {
        case SET_LOADING:{  
        return {
            ...state,
            isLoading: action.loading
        }
        }


        default:
            return state
        }
}


export let setLoading = (loading) => {
    return{
        type: SET_LOADING,
        loading,
    }
}


export default loading;