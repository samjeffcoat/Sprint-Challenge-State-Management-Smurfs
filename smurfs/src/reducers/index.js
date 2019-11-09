import {
    FETCH_SMURF_FAILED,
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    ADD_SMURF,
    POST_SMURF,
    POST_SMURF_FAILED
} from '../actions';
//brings in our actions

//sets our initial state for the app
const initialState = {
    smurfs: [],
    isFetching: false,
    error: " ",
    addingSmurf: false
}

//reducer built for initial state to get smurfs
function reducer(state= initialState, action){
    console.log('reducer', action);
    switch(action.type){
        case FETCH_SMURF_START:
            return {
                ...state,
                error: "",
                isFetching: true,
            };
        case FETCH_SMURF_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error : " ",
                smurfs: action.payload
            }
        case FETCH_SMURF_FAILED:
            return {
                ...state,
                isFetching:false,
                error: action.payload
            }
        case ADD_SMURF:
            return{
                ...state,
                newSmurf: [
                    {
                        name: action.payload.name,
                        age: action.payload.age,
                        height: action.payload.height
                    }
                ]
            }
        case POST_SMURF:
            return {
                ...state,
                isFetching: true,
                addingSmurf: true
            }
        case POST_SMURF_FAILED:
            return {
                ...state, 
                error: action.payload,
                isFetching: false
            }

            default: 
            return state; 
    }
}
export default reducer;