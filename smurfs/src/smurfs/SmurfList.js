import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { fetchSmurf } from '../actions'; 


const SmurfList = props => {
    useEffect(() => {
        props.fetchSmurf();
        console.log(props.smurfs);
    }, []);
    if (props.isFetching) {
        return <h2>Welcome to the Smurf Village!</h2>
    }
    return (
        <div>
            {props.state && <p>{props.error}</p>}
            {props.smurfs && props.smurfs.map(smurf => (
                <div>
                    <h1>Name: {smurf.name}</h1>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error 
    }
}

export default connect(mapStateToProps, {fetchSmurf})(SmurfList);









// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchSmurf } from '../actions';


// function SmurfList(props) {
//     console.log('SmurfList', props);
//     return (
//         <>
//             <button onClick= {() => props.dispatch(fetchSmurf())}>Get a Smurf</button>
//             {props.isFetching && <div>🚀</div>}
//             {props.error && <div>{props.error.message}</div>}
//             <ul>
//                 {props.smurfs.map(s => (
//                     <li className= "smurf" key ={s.name}>{s.name}</li>
//                 ))}
//             </ul>
//         </>
//     );
// }

// const mapDispatchToProps = {
//     fetchSmurf
// };

// export default connect(state => {
//     console.log("mapStateToProps.STATE",  state);
//     return state;
// })(SmurfList);
