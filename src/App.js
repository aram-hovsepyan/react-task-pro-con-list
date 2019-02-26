import React, { Component } from 'react';
import Entry from './components/Entry/Entry';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Entry title="Should I eat at McDonalds?" />
      </div>
    );
  }
}

export default App;
