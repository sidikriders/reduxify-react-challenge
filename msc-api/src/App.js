import React, { Component } from 'react';
import Bulma from 'bulma/css/bulma.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store/store'
import { Provider } from 'react-redux'

import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar'
import Home from './components/Home'
import StarWars from './components/StarWars'
import RandomCat from './components/RandomCat'

class App extends Component {
  render() {

    let styleDiv = {
      padding: "20px"
    }

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="App-header field">
              <img src={logo} className="App-logo" alt="logo" />
              <h2 className="title is-2">Welcome to MSC-API</h2>
            </div>
            <p className="App-intro field" style={{marginBottom: "30px"}}>
              To get started, select API you want.
            </p>
            <div className="columns" style={{margin: "20px"}}>
              <div className="column is-3">
                <SideBar></SideBar>
              </div>
              <div className="column box" style={styleDiv}>
                <Route exact path="/" component={Home}/>
                <Route path="/star-wars" component={StarWars}/>
                <Route path="/random-cat" component={RandomCat}/>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
