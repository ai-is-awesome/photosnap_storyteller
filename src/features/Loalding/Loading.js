import React from "react";
import gif from "../../assets/Shared/desktop/walking.gif";
import style from "./Loading.module.scss";

export default function Loading() {
  return (
    <div className={style.loading__container}>
      <div className={style.img}>
        <img src={gif} alt="" />
      </div>
    </div>
  );
}
