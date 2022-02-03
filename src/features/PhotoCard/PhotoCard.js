import React from "react";
import "./photocard.scss";
import testImage from "./create-and-share.jpg";
import classNames from "classnames";

export default function PhotoCard({ textSide, textTheme }) {
  const textContainerClasses = classNames(
    "pc__text_container",
    textTheme === "dark" ? ".pc__dark_theme" : "pc__light_theme"
  );

  const textContainer = (
    <div className={textContainerClasses}>
      <h1>Create and share you photos</h1>
      <p>
        Photosnap is a platform for photographers and visual storytellers. We
        make it easy to share photos, tell stories and connect with others.
      </p>
    </div>
  );

  const imgContainer = (
    <img className={"pc__img_container"} src={testImage} alt="hero_img" />
  );

  if (textSide === "left") {
    return (
      <div className={"pc__container"}>
        {textContainer}
        {imgContainer}
      </div>
    );
  }

  return (
    <div className={"pc__container"}>
      {imgContainer}
      {textContainer}
    </div>
  );
}
