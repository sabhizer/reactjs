//NOT WORKING


import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      data: {},
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(res => {
        res.data.map(user => {
            console.log(`${user.id}: ${user.first_name} ${user.last_name}`);
        });
    });
    // fetch("https://reqres.in/api/users/2")
    //   .then((response) => {
    //     console.log(response);
    //     response.json();
    //   })
    //   .then((data) => {
    //     console.log(data)
    //     this.setState({
    //       data: data,
    //       isLoading: false,
    //     });
    //   });
  }

  render() {
    const text = this.state.isLoading ? "Loading..." : this.state.data.email;
    return <h1>{text}</h1>;
  }
}

export default App;
