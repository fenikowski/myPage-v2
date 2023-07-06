import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import "./style/admin.css";
import Cookies from "universal-cookie";
import axios from "axios";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

export default function Admin() {
  // states
  const [messages, setMessages] = useState([]);
  const [timesVisited, setTimesVisited] = useState(0);
  const [referrers, setReferrers] = useState([]);

  // effects
  useEffect(() => {
    getMessages();
    getStats();
  });

  const style = {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    height: "30vh"
  };

  const getMessages = () => {
    const cookies = new Cookies();
    const logged = cookies.get("logged");

    axios
      .get("/api/message", { logged })
      .then(data => {
        if (data.data.received) {
          setMessages(data.data.received);
        }
      })
      .catch(error => console.log(error));
  };

  const getStats = () => {
    axios
      .get("/api/stats")
      .then(data => {
        const [visits, referrerList] = data.data;
        setReferrers(referrerList);
        setTimesVisited(visits);
      });
  };

  const checkIfUserIsLogged = () => {
    const cookies = new Cookies();
    return cookies.get("logged");
  };

  const handleDelete = id => {
    axios.delete("/api/message", { id }).then(() => getMessages());
  };

  const handleLogout = () => {
    const cookies = new Cookies();
    cookies.remove("logged");
    setMessages([]);
  };

  if (!checkIfUserIsLogged()) return <Redirect push to="/login" />;

  const messagesComponents = messages.map(message => (
    <div className="message" key={message._id}>
      <div>{message.userName}</div>
      <div>{message.email}</div>
      <div>{message.message}</div>
      <div>
        <i
          className="fas fa-times"
          onClick={() => handleDelete(message._id)}
        />
      </div>
    </div>
  ));

  return (
    <div className="admin">
      <button className="logout" onClick={handleLogout}>
        logout
      </button>
      <div className="messages-box">
        <div className="headers">
          <div>Author</div>
          <div>Email</div>
          <div>Message</div>
          <div>Manage</div>
        </div>
        <SimpleBar style={style}>{messagesComponents}</SimpleBar>
      </div>
      <div className="stats-box">
        <div className="headers">Statistics</div>
        <p>
          Messages in the box:{" "}
          <span style={{ color: "red" }}>{messages.length}</span>
        </p>
        <p>
          Times visited:{" "}
          <span style={{ color: "red" }}>{timesVisited}</span>
        </p>
        <p>
          Referrers:{" "}
          {referrers.map(item => (
            <span style={{ fontSize: "12px", display: "block" }}>{item}</span>
          ))}
        </p>
      </div>
    </div>
  );
};