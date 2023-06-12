import React from "react";
import styled from "styled-components";
import card from "../assets/card.png";
import signupBackground from "../assets/signupBackground.png";

export default function SignUp() {
  return (
    <Section className="flex gap j-between">
      <div className="content text-center">
        <h2>Sign up without any bank account linking and card</h2>
      </div>
      <div className="image">
        <img src={card} alt="card" />
      </div>
    </Section>
  );
}