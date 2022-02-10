import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import UserStory from "../UserStory/UserStoryContainer";
import data from "../../data";

export default function HomePage() {
  const photoCardData = data.photoCardData;
  return (
    <>
      HELLO FROM HOMEPAGE
      <UserStory page={"home"} isDesktop={true} />
      {/* <PhotoCard textTheme={"light"} textSide={"right"} />
      <PhotoCard textTheme={"dark"} textSide={"left"} /> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 style={{ textAlign: "center" }}>Share with us!</h1>
      {photoCardData.map((photoCard) => {
        return <PhotoCard {...photoCard} />;
      })}
    </>
  );
}
