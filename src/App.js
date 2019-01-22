import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LinkList from './components/LinkList';
import CreateLink from "./components/CreateLink";
import Header from "./components/Header";
import Login from './components/Login'
import Search from "./components/Search";

import logo from './logo.svg';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} />
            <Route exact path='/search' component={Search} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
