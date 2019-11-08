import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import "./index.css";
import App from "./App";
import thunk from 'redux-thunk'; 
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducer from './reducers';
const store= createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));



ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider >, document.getElementById("root"));
