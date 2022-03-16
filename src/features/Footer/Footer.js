import React from "react";
import { Link } from "react-router-dom";
import CopyrightText from "../../components/CopyrightText";
// import GetInvite from "../../components/GetInvite";
import Logo from "../../assets/Shared/desktop/logo-white.svg";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import style from "./footer.module.scss"
import { useLocation } from "react-router-dom";
import arrow from "../../assets/Shared/desktop/arrow.svg"

export default function Footer() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className={style.fr__container}>
      <div className={style.fr__left_container}>
        <div className={style.fr__left_container_main}>
          <div>
            <img src={Logo} alt="logo" />
            {/* <span>Photosnap</span> */}
          </div>
          <div className={style.fr__left_container_main_social}>
            <Link to="">
              <BsFacebook className={style.fr__icon} />
            </Link>
            <Link to="">
              <BsYoutube className={style.fr__icon} />
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
        <div className={style.fr__left_container_links}>
          <Link className={splitLocation[1] ===''? style.active:""} to={"/"}>Home</Link>
          <Link className={splitLocation[1] ==='stories'? style.active:""} to={"/stories"}>Stories</Link>
          <Link className={splitLocation[1] ==='features'? style.active:""} to={"/features"}>Features</Link>
          <Link className={splitLocation[1] ==='pricing'? style.active:""} to={"/pricing"}>Pricing</Link>
        </div>
      </div>
      <div className={style.fr__right_container}>
        <div>Get An Invite <img src={arrow} alt="->"/></div>
        <CopyrightText />
      </div>
    </div>
  );
}
