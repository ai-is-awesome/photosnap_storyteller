import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import style from "./AddStory.module.scss";

export default function AddStory({ setStoryForm }) {
  return (
    <div className={style.addStory__icon} onClick={() => setStoryForm(true)}>
      <MdOutlineAdd />
    </div>
  );
}
