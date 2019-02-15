import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home.js';

const NewRoute = () => {
  return (
    <div>
      <p>New Route</p>
    </div>
  );
}

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;
