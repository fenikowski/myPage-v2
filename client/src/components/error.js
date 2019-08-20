import React from "react";
import Data from "../text";

const Error = props => {
  let text = "";
  if (props.language === "es") {
    text = Data.es.error;
  } else if (props.language === "en") {
    text = Data.en.error;
  }

  return (
    <p
      style={{
        margin: "20vh auto 0",
        fontSize: "30vh",
        height: "70vh",
        textAlign: "center"
      }}
    >
      {text.first}
      <a href="/" style={{ fontSize: "10vh", display: "block" }}>
        {text.second}
      </a>
    </p>
  );
};

export default Error;
