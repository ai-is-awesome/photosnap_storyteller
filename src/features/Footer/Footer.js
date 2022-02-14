import React from "react";
import { Link } from "react-router-dom";
import CopyrightText from "../../components/CopyrightText";
import GetInvite from "../../components/GetInvite";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="fr__container">
      <div className="fr__left_container">
        <div className="fr__left_container_main">
          <div>
            LOGO <span>Photosnap</span>
          </div>
          <div className="fr__left_container_main_social">
            <span>Link 1</span>
            <span>Link 1</span>
            <span>Link 1</span>
            <span>Link 1</span>
          </div>
        </div>
        <div className="fr__left_container_links">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/pricing"}>Pricing</Link>
          <Link to={"/"}>Home</Link>
        </div>
      </div>
      <div className="fr__right_container">
        <GetInvite />
        <CopyrightText />
      </div>
    </div>
  );
}
