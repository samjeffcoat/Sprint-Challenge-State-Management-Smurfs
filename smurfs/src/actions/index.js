import axios from 'axios'

export const FETCHING_SMURF_START= "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILED = "FETCHING_SMURF_FAILED";


export const smurfLoading = () => ({type: FETCHING_SMURF_START});
export const smurfLoadSuccess = data => ({type: FETCHING_SMURF_SUCCESS, payload: data});
export const smurfLoadFailure = error => ({type:FETCHING_SMURF_FAILED, payload: error});

export const  fetchSmurf = ()=> dispatch => {
    //fetching our smurf data from our api

    dispatch({type:FETCHING_SMURF_START});
        //our app state is updated  to know that our api call is starting 
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => dispatch({type: FETCHING_SMURF_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: FETCHING_SMURF_FAILED, payload: err.response}))
    }