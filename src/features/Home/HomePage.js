import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import UserStory from "../UserStory/UserStory";

export default function HomePage() {
  return (
    <>
      HELLO FROM HOMEPAGE
      <UserStory />
      <PhotoCard textTheme={"light"} textSide={"right"} />
      <PhotoCard textTheme={"dark"} textSide={"left"} />
    </>
  );
}
