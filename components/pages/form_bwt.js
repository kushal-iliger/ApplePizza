import React, { Component } from "react";
import "../pages/form_bwt.css";

class form_bwt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      Email: "",
      Ort: "",
      bestelt: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firsthandler = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  lasthandler = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  passwordhandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  genderhandler = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`
    );
    console.log(this.state);
    this.setState({
      Name: "",
      Email: "",
      Ort: "",
      bestelt: "",
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>User Registration</h1>
          <label>Name :</label>{" "}
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.firsthandler}
            placeholder="Name..."
          />
          <br />
          <label>E-mail :</label>{" "}
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.lasthandler}
            placeholder="Email..."
          />
          <br />
          <label>Ort :</label>{" "}
          <input
            type="text"
            value={this.state.password}
            onChange={this.passwordhandler}
            placeholder="Ihren Ort..."
          />
          <br />
          <label>Was hast du bestelt? :</label>
          <select onChange={this.genderhandler} defaultValue="Select Gender">
            <option defaultValue>Select </option>
            <option value="pizza">Pizza</option>
            <option value="pasta">Pasta</option>
            <option value="salat">Salat</option>
            <option value="getranke">Getranke</option>
            <option value="desert">Desert</option>
            <option value="gratin">Gratin</option>
          </select>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default form_bwt;
