import React from "react";
import "./photocard.scss";
import classNames from "classnames";

export default function PhotoCard({
  textSide,
  textTheme,
  description,
  title,
  img,
}) {
  const textContainerClasses = classNames(
    "pc__text_container",
    textTheme === "dark" ? ".pc__dark_theme" : "pc__light_theme"
  );

  const textContainer = (
    <div className={textContainerClasses}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );

  const imgContainer = (
    <img className={"pc__img_container"} src={img} alt="hero_img" />
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
