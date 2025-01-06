import React from "react";
import Data from "../text";

type DataType = {
  [language: string]: {
    error: {
      first: string;
      second: string;
    }
  }
}

export default function Error({ language } : { language: string }) {
  const text = (Data as DataType)[language].error;

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
