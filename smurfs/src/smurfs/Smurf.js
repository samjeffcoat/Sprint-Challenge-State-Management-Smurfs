import React from 'react';


const Smurf = props => {
    const {name, age, height} = props.smurfs;
    return <li>
  Name: {name}
    Age: {age}
    Height: {height}</li>;
};

export default Smurf; 