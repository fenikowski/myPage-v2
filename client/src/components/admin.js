import React from "react";
import { Redirect } from "react-router";
import "./style/admin.css";
import Cookies from "universal-cookie";
import axios from "axios";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.css";

class Admin extends React.Component {
  state = {
    messages: []
  };

  style = {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    height: "30vh"
  };

  componentDidMount() {
    this.getMessages();
  }

  getMessages = () => {
    const cookies = new Cookies();
    const logged = cookies.get("logged");

    axios
      .get("/api/getMessages", {
        logged
      })
      .then(data => {
        if (data.data.received !== false) {
          this.setState({ messages: data.data.received });
        }
      })
      .catch(error => console.log(error));
  };

  checkIfUserIsLogged = () => {
    const cookies = new Cookies();
    return cookies.get("logged");
  };

  handleDelete = id => {
    console.log(id);
    axios.post("/api/deleteMessage", { id }).then(() => this.getMessages());
  };

  handleLogout = () => {
    const cookies = new Cookies();
    cookies.remove("logged");
    this.setState({ messages: [] });
  };

  render() {
    if (!this.checkIfUserIsLogged()) return <Redirect push to="/login" />;

    let messages = this.state.messages;
    messages = messages.map(message => (
      <div className="message" key={message._id}>
        <div>{message.userName}</div>
        <div>{message.email}</div>
        <div>{message.message}</div>
        <div>
          <i
            className="fas fa-times"
            onClick={this.handleDelete.bind(this, message._id)}
          />
        </div>
      </div>
    ));

    return (
      <div className="admin">
        <button className="logout" onClick={this.handleLogout}>
          logout
        </button>
        <div className="messages-box">
          <div className="headers">
            <div>Author</div>
            <div>Email</div>
            <div>Message</div>
            <div>Manage</div>
          </div>
          <SimpleBar style={this.style}>{messages}</SimpleBar>
        </div>
        <div className="stats-box">
          <div className="headers">Statistics</div>
          <p>Times visited: 56</p>
          <p>Messages received: 13</p>
          <p>Messages in the box: 3</p>
        </div>
      </div>
    );
  }
}

export default Admin;
