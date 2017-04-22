import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

/*
App.propTypes = {
  children: PropTypes.object.isRequired
};
*/

export default App;
