import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import UserStory from "../UserStory/UserStory";
import data from "../../data";

export default function HomePage() {
  const photoCardData = data.photoCardData;
  return (
    <>
      HELLO FROM HOMEPAGE
      <UserStory />
      {/* <PhotoCard textTheme={"light"} textSide={"right"} />
      <PhotoCard textTheme={"dark"} textSide={"left"} /> */}
      {photoCardData.map((photoCard) => {
        return <PhotoCard {...photoCard} />;
      })}
    </>
  );
}
