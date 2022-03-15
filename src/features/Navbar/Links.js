import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import StoryForm from "../pages/StoriesPage/StoryForm/StoryForm";
import style from "./Navbar.module.scss";

export default function Links() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [storyForm, setStoryForm] = useState(false);

  return (
    <>
      <Link
        className={`${style.link} ${
          splitLocation[1] === "stories" ? style.active : ""
        }`}
        to="/stories"
      >
        <p>stories</p>
      </Link>
      <Link
        className={`${style.link} ${
          splitLocation[1] === "features" ? style.active : ""
        }`}
        to="/features"
      >
        <p>features</p>
      </Link>
      <Link
        className={`${style.link} ${
          splitLocation[1] === "pricing" ? style.active : ""
        }`}
        to="/pricing"
      >
        <p>pricing</p>
      </Link>
      <button
        className={`${style.cta_item} ${style.link} ${
          splitLocation[1] === "pricing" ? style.active : ""
        }`}
        onClick={() => setStoryForm(true)}
      >
        <p>Add your Story!</p>
      </button>
      {storyForm ? (
        <StoryForm storyForm={storyForm} setStoryForm={setStoryForm} />
      ) : (
        ""
      )}
    </>
  );
}
