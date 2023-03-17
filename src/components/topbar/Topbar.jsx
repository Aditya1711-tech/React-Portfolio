import React from "react";
import "./topbar.scss";
// import { Mail } from "@material-ui/icons";
// import { FiUser, FiMail } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Folio.
          </a>
          <div className="itemContainer">
            <FontAwesomeIcon icon={faUser} size="xs" className="icon" />
            <span>+91 9727556528</span>
          </div>
          <div className="itemContainer">
            <FontAwesomeIcon icon={faEnvelope} size="xs" className="icon" />
            <span>adityakaneriya1711@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line1"></span>
            <span className="line1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
