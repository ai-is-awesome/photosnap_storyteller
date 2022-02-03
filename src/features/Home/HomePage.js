import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import UserStory from "../UserStory/UserStory";

export default function HomePage() {
  const arr = [1];
  return (
    <>
      HELLO FROM HOMEPAGE
      <UserStory />
      <PhotoCard />
    </>
  );
}
