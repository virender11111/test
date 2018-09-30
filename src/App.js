import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import reducer from './reducers'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
     console.log('provideer')
    console.log(reducer)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
            <div>
              <Link to="/foo">Foo</Link>
            </div>
      </div>
    );
  }
}

export default App;
