import axios from 'axios'

export const FETCH_SMURF_START= "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILED = "FETCH_SMURF_FAILED";
export const ADD_SMURF = "ADD_SMURF";
export const POST_SMURF = "POST_SMURF";
export const POST_SMURF_FAILED= "POST_SMURF_FAILED";


export const smurfLoading = () => ({type: FETCH_SMURF_START});
export const smurfLoadSuccess = data => ({type: FETCH_SMURF_SUCCESS, payload: data});
export const smurfLoadFailure = error => ({type:FETCH_SMURF_FAILED, payload: error});

export const  fetchSmurf = ()=> dispatch => {
    //fetching our smurf data from our api

    dispatch({type:FETCH_SMURF_START});
        //our app state is updated  to know that our api call is starting 
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: FETCH_SMURF_FAILED, payload: err.response}))
    }
export const addSmurf = (smurf) => dispatch => {
    dispatch({type: ADD_SMURF});
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => dispatch({type: ADD_SMURF, payload: res.data}))
        .catch(err => dispatch({type: POST_SMURF_FAILED, payload: err}))
}

// export function addSmurf (name, age, height) {
//     return (dispatch) => {
//         dispatch({type: ADD_SMURF, payload: {name, age, height}})
//     }
// }