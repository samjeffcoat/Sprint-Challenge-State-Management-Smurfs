import React from 'react';
import {connect} from "react-redux";

import SmurfList from './SmurfList';
import { fetchSmurf } from '../actions';


class SmurfView extends React.Component {
    constructor(){
    super();
}
componentDidMount(){
    this.props.fetchSmurf();
}
render(){
    if (this.props.fetchingSmurfs) {
        return (
            <h3>Fetching Smurfs 💪🏼</h3>
        )
    }
    return (
        <div className= 'SmurfView'>
            <SmurfList smurfs = {this.props}/>
        </div>
    )
}
}
const mapStateToProps = state => {
    return {
        characters: state.smurfs,
        fetchingSmurfs : state.fetchingSmurfs
    }
}

export default(connect(mapStateToProps, {fetchSmurf})(SmurfView))