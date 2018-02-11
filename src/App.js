// based on  https://scotch.io/tutorials/create-a-simple-to-do-app-with-react

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  addTodo(value) {

    const todo = {text: value};
    this.setState(prevState => ({
      arrayvar: [...prevState.data, todo]
    }))


  }

  render() {
    return (
      <div>

      </div>
    );
  }

}

export default App;
