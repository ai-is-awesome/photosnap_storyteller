import React from "react";
import style from "./ProgressBar.module.scss";

export default function UploadProgress({ percentageCompleted }) {
  console.log("upload progress");
  const comp = 10;
  return (
    <div className={style.pb__container}>
      <div className={style.pb__progress_container}>
        <div id={style.progress}></div>
      </div>
    </div>
  );
}


