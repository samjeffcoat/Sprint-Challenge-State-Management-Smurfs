export const FETCHING_SMURF_LOADING = "FETCHING_SMURF_LOADING";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILED = "FETCHING_SMURF_FAILED";


export const smurfLoading = () => ({type: FETCHING_SMURF_LOADING});
export const smurfLoadSuccess = data => ({type: FETCHING_SMURF_SUCCESS, payload: data});
export const smurfLoadFailure = error => ({type:FETCHING_SMURF_FAILED, payload: error});

export function fetchSmurf(){
    //fetching our smurf data from our api

    return function(dispatch) {
        //our app state is updated  to know that our api call is starting 
        dispatch(smurfLoading());

    return fetch(`httpL//localhost:3333/smurfs`)
    .then(response => response.json())
    .then(json =>
        //update our app state based on our api call
        dispatch(smurfLoadSuccess(json.results))
        )
    .catch(error => dispatch(smurfLoadFailure(error)))
    }
}