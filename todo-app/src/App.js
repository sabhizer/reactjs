import React from "react";
import "./App.css";
import TodoItem from "./TodoItem";
import todoData from "./todoData";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log("Changed!!", id)
    this.setState((prevState) => {
      let updatedTodos = prevState.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        console.log(item)
        return item;
      })
      console.log(updatedTodos)
      return (
        {
          todos: updatedTodos
        }
      )
    })
  }

  render(){
    const todoComponent = this.state.todos.map((item) => (<TodoItem key={item.id} item={item} handleChange={this.handleChange}/>));
    return <div>{todoComponent}</div>;
  }

}

export default App;
