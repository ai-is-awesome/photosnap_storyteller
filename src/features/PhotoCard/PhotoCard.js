import React from "react";
import "./photocard.scss";
import testImage from "./create-and-share.jpg";

export default function PhotoCard({ textSide, textTheme }) {
  return (
    <div className="pc__container">
      <div className="pc__left_container">
        <h1>Create and share you photos</h1>
        <p>
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>
      </div>
      <img className="pc__right_container" src={testImage} />
    </div>
  );
}
