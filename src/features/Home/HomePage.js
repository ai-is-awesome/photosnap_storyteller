import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import Footer from "../Footer/Footer";
import UserStory from "../UserStory/UserStoryContainer";
import data from "../../data";
import "./HomePage.scss";
import Features from "../Fetures/Features";

export default function HomePage() {
  const photoCardData = data.photoCardData;

  const photoCardRender = photoCardData.map((photoCard) => {
    return <PhotoCard {...photoCard} />;
  });

  return (
    <>
      {photoCardRender}
      <h1 className="hp__title">Share with us!</h1>
      <UserStory page="home" />
      <Features page="home" />
      <Footer />
    </>
  );
}
