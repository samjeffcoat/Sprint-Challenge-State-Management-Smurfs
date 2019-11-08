import React, { Component } from "react";
import "./App.css";
import SmurfList from './smurfs/SmurfList';
import { connect } from 'react-redux';
import {fetchSmurf} from './actions';
import SmurfForm from "./smurfs/SmurfForm";

class App extends Component {
  componentDidMount(){
    this.props.fetchSmurf();
  }
  render() {
    return (
      <div className="App">
        <SmurfList/>
        <SmurfForm/>
      </div>
    );
  }
}

export default connect(null, {fetchSmurf})(App);
