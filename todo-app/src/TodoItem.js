import React from "react";
import "./App.css";

function TodoItem(props) {
  const styles = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }
  return (
    <div className="App">
      <input type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)}></input>
      <p style={props.item.completed ? styles : null}>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
