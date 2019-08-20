import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "../styles/login.css";

class Login extends React.Component {
  state = {
    login: "",
    password: "",
    info: ""
  };

  handleClick = e => {
    e.preventDefault();

    axios
      .post("/api/login", {
        username: this.state.login,
        password: this.state.password
      })
      .then(data => {
        const { info } = data.data;
        this.setState({ info });

        if (info === "Logged correctly") {
          window.location = "/admin";
          const cookie = new Cookies();
          cookie.set("logged", true, { maxAge: 30 * 60 * 1000 });
        }
      });
  };

  handleInput = e => {
    if (e.target.type === "text") {
      this.setState({
        login: e.target.value
      });
    } else if (e.target.type === "password") {
      this.setState({
        password: e.target.value
      });
    }
  };

  render() {
    return (
      <div className="admin">
        <form action="submit">
          <label>
            login:{" "}
            <input
              type="text"
              value={this.state.login}
              onChange={this.handleInput}
            />
          </label>
          <label>
            password:{" "}
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput}
            />
          </label>
          <button onClick={this.handleClick}>connect</button>
          <p>{this.state.info}</p>
        </form>
      </div>
    );
  }
}

export default Login;
