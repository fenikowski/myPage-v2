import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "./style/login.css";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");

  const handleClick = e => {
    e.preventDefault();

    axios
      .post("/api/login", { username: login, password })
      .then(data => {
        const { info } = data.data;
        setInfo(info);

        if (info === "Logged correctly") {
          window.location = "/admin";
          const cookie = new Cookies();
          cookie.set("logged", true, { maxAge: 30 * 60 * 1000 });
        }
      });
  };

  const handleInput = e => {
    if (e.target.type === "text") {
      setLogin(e.target.value);
    } else if (e.target.type === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="admin">
      <form action="submit">
        <label>
          login:{" "}
          <input
            type="text"
            value={login}
            onChange={handleInput}
          />
        </label>
        <label>
          password:{" "}
          <input
            type="password"
            value={password}
            onChange={handleInput}
          />
        </label>
        <button onClick={handleClick}>connect</button>
        <p>{info}</p>
      </form>
    </div>
  );
};