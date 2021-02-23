import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
  }
  render() {
    let wordDisplay;
    if (this.state.isLoggedIn) {
      wordDisplay = "In";
    } else {
      wordDisplay = "Out";
    }
    return <h1>You are Logged {wordDisplay}</h1>;
  }
}

export default App;
