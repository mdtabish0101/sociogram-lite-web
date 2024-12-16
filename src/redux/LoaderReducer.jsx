const initialState = {
    loading : false,
}



const LoaderReducer = (state = initialState, action) => {
    switch(action.type){
        case 'showLoading' : return {
            ...state,
            loading : true
        }

        case 'hideLoading' : return {
            ...state,
            loading : false
        }

        default : return
    }
}


export {LoaderReducer}