import {
    FETCHING_SMURF_FAILED,
    FETCHING_SMURF_LOADING,
    FETCHING_SMURF_SUCCESS
} from '../actions';
//brings in our actions

//sets our initial state for the app
const initialState = {
    smurfs: [],
    isFetching: false,
    error: null
}

//reducer built for initial state to get smurfs
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