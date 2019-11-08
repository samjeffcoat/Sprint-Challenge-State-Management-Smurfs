import React, { Component } from "react";
import "./App.css";
import SmurfList from './smurfs/SmurfList';
import { connect } from 'react-redux';
import {fetchSmurf} from './actions';

class App extends Component {
  componentDidMount(){
    this.props.fetchSmurf();
  }
  render() {
    return (
      <div className="App">
        <SmurfList/>
      </div>
    );
  }
}

export default connect(null, {fetchSmurf})(App);
