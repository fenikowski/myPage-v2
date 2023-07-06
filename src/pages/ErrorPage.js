import React from "react";
import Data from "../text";

export default function Error({ language }) {
  const text = Data[language].error;

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
