import React from "react";
import { Link } from "react-router-dom";
import CopyrightText from "../../components/CopyrightText";
import GetInvite from "../../components/GetInvite";
import Logo from "../../assets/Shared/desktop/logo.svg";

import "./footer.scss";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="fr__container">
      <div className="fr__left_container">
        <div className="fr__left_container_main">
          <div>
            {/* <img src={Logo} alt="logo" /> */}
            <span>Photosnap</span>
          </div>
          <div className="fr__left_container_main_social">
            <Link to="">
              <BsFacebook className="fr__icon" />
            </Link>
            <Link to="">
              <BsYoutube className="fr__icon" />
            </Link>
            <Link to="">
              <AiFillTwitterCircle />
            </Link>
            <Link to="">
              <FaPinterest />
            </Link>
            <Link to="">
              <AiFillInstagram />
            </Link>
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
