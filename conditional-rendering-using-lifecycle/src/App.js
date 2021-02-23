import MyComponent from "./MyComponent";
import React from "react";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      isLoading: true
    }
  }

  //Below is just an example. Real world scenario can be initialization of app, or waiting until getting data from API.
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    },5000)
  }
  
  render() {
    return <MyComponent isLoading={this.state.isLoading}/>;
  }
}

export default App;
