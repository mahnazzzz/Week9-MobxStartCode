import React, { Component } from 'react';
import '../styles/App.css';
import todoStore from "../data/todoStore";
import TodoList from "./TodoList";
todoStore.loadTodes();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React/MobX Starter Code</h2>
        </div>
        <p className="App-intro">
         <TodoList store={todoStore}/>

        </p>
      </div>
    );
  }
}

export default App;