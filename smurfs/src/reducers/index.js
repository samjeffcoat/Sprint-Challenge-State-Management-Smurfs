

const initialState = {
    smurfs: [],
    isFetching: false,
    error: null
}

function reducer(state= initialState, action){
    console.log('reducer', action);
    switch(action.type){
        case FETCHING_SMURF_LOADING:
            return {
                ...state,
                isFetching: true,
                error:null
            };
        case FETCHING_SMURF_SUCCESS:
            return{
                ...state,
                isFetching: true,
                error : null
            }
        case FETCHING_SMURF_FAILED:
            return {
                ...state,
                smurfs: [],
                isFetching:false,
                error: action.payload
            }
            default: 
            return state; 
    }
}
export default reducer;