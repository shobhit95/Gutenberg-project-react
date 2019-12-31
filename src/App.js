import React, { Component } from "react";
import './App.css';
import MainPage from './Components/MainPage';
import Genre from './Components/Genre';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#F8F7FF", height: '100vh' }}>

        <Router>
          <Switch>
            <Route exact path="/" component={(props) => <MainPage  {...props} />} ></Route>
            <Route exact path="/:genre" component={(props) => <Genre  {...props} />} ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}



export default App;
