import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf'

const SmurfList = props => {
    return(
        <div>
            {props.smurfs.map(smurf => (
                <Smurf smurf={smurf} key={smurf.id}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(mapStateToProps)(SmurfList);









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
