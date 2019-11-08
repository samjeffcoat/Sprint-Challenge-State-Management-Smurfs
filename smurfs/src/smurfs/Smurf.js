import React from 'react';
import { connect } from 'react-redux';


const Smurf = props => {
    const {name, age, height, id} = props.smurfs;
    return <div>
        <h3>Name: {name}</h3>
        <p>Age: {age}</p>
        <p>Height: {height}</p>
    </div>;
};

export default Smurf; 