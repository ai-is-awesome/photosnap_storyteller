import React from "react";
import style from "./button.module.scss";

export default function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={style.btn}>
      {text}
    </button>
  );
}
