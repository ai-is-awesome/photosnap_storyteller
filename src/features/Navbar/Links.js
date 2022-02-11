import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import style from "./Navbar.module.scss"

export default function Links() {
   const location = useLocation();
   const { pathname } = location;
   const splitLocation = pathname.split("/");

  return (
     <>
      <Link className={`${style.link} ${splitLocation[1] === "stories" ? style.active : ""}`} to="/stories">
         <p>stories</p>
      </Link>
      <Link className={`${style.link} ${splitLocation[1] === "features" ? style.active : ""}`} to="/features">
         <p>features</p>
      </Link>
      <Link className={`${style.link} ${splitLocation[1] === "pricing" ? style.active : ""}`} to="/pricing">
         <p>pricing</p>
      </Link>
     </>
  );
}
