import React from "react";
import styled from "styled-components";
export default function Button({ text, icon = false, subduedButton = false }) {
  return (
    <Div className="flex j-center a-center ">
      {icon ? (
        <button
          className={`flex a-center j-center gap-1 ${
            subduedButton ? "subduedBtn" : ""
          }`}
        >
          {text}
          {icon}
        </button>
      ) : (
        <button className={`${subduedButton ? "subduedBtn" : ""}`}>
          {text}
        </button>
      )}
    </Div>
  );
}

