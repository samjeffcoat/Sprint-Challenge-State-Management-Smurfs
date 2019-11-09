import React, {useState} from 'react';
import {connect} from 'react-redux';
import { addSmurf, postSmurf} from '../actions';


const SmurfForm = () => {
    const {smurfName, setSmurfName} = useState();
    const [smurfAge, setSmurfAge]= useState();
    const [smurfHeight, setSmurfHeight] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        addSmurf(smurfName, smurfAge,smurfHeight)
        postSmurf(postSmurf);
    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <input 
                type = 'text' 
                placeholder  = ' Smurf Name' 
                onChange = {event => setSmurfName(event.target.value)} 
                value = {smurfName}
                 />
                <input 
                type='text' 
                placeholder=' Smurf Age' 
                onChange={event => setSmurfAge(event.target.value)} 
                value={smurfAge }
                />
                <input 
                type='text' 
                placeholder=' Smurf Height' 
                onChange={event => setSmurfHeight(event.target.value)} 
                value={smurfHeight }
                />
                <button type='submit' >Add Your Smurf!</button>
            </form>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        newSmurf: state.addingSmurf
    }
}

export default connect(mapStateToProps)(SmurfForm);