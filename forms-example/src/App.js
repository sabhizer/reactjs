import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      textArea: "",
      isFriendly: false,
      gender: "",
      favColor: "red",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if ([event.target.type] == "checkbox") {
      this.setState({
        [event.target.name]: event.target.checked,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={this.handleChange}
        />
        <br />
        {/* 
        Below has additional value property. 
        This is working exactly same as firstName input element, 
        just that I am forcing value to come from state, rather than my keyboard inputs (since State should be the source of truth in react).
        And State is contantly getting updated as I enter any character in input box. 
        So in the end, result is similar to above firstName input box. The flow here is -
        lastName : keyboard input > State > value
        firstname : keyboard input > value > State
        */}
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <br />

        <textarea
          name="textArea"
          placeholder="Tell something about yourself"
          value={this.state.textArea}
          onChange={this.handleChange}
        />
        <br />

        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          Is Friendly
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />{" "}
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />{" "}
          Female
        </label>
        <br />

        <label>Favourite Colour </label>
        <select
          name="favColor"
          value={this.state.favColor}
          onChange={this.handleChange}
        >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="red">Red</option>
          <option value="white">White</option>
        </select>

        <p>
          {this.state.firstName} {this.state.lastName}
        </p>
      </form>
    );
  }
}

export default App;
