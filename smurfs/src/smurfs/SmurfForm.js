import React from 'react';
import {connect} from 'react-redux';


const SmurfForm = props => {
    const {name, age, height} = props;

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