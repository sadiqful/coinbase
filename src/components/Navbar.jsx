import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Button from "./Button";

export default function Navbar() {
  const links = ["Home", "Dashboard", "Learn", "FAQ", "Contact", "About"];
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));
  return (
    <Nav state={isNavOpen ? 1 : 0} className="flex j-between a-center">
      <div className="brand">
        <h2>Coinbase</h2>
      </div>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul className="flex gap-2">
          {links.map((link) => {
            return (
              <li key={link}>
                <a href={link}>{link}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="auth flex gap-1">
        <Button text="Sign In" subduedButton />
        <Button text="Sign Up" />
      </div>
    </Nav>
  );
}