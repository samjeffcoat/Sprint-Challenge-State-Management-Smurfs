import React, {useState} from 'react';
import {connect} from 'react-redux';
import { addSmurf, postSmurf} from '../actions';


const SmurfForm = () => {
    const {smurfName, setSmurfName} = useState();
    const [smurfAge, setSmurfAge]= useState();
    const [smurfHeight, setSmurfHeight] = useState();

    return(
        <form>
            <input type = 'text' name = 'name' value = {name}/>
            <input type='text' name='age' value={age }/>
            <input type='text' name='height' value={height }/>
            <button type='submit' ></button>
        </form>
    )
}

const mapStateToProps = state => ({
    name: state.name,
    age: state.age,
    height: state.height
})

export default connect(mapStateToProps)(SmurfForm);