const initialState = {
    loading : false,
}



export const LoaderReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_LOADING' : return {
            ...state,
            loading : action.payload
        }
        default : return state;
    }
}


