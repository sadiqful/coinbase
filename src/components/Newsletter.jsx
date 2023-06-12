import React from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import Button from "./Button";
export default function Newsletter() {
  return (
    <Section className="flex j-between a-center gap">
      <div className="title-container flex column gap-1">
        <h2>Newsletter</h2>
        <h3 className="subdue">
          Get now free 20% discount for all products on your first order
        </h3>
      </div>
      <div className="newsletter flex j-center a-center gap-2">
        <div className="input-container flex j-center a-center gap-1">
          <AiOutlineMail />
          <input type="text" placeholder="Enter your email address" />
        </div>
        <Button text="Subscribe" />
      </div>
    </Section>
  );
}