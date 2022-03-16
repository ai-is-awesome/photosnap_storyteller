import React, { useState, useEffect } from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import UserStory from "../UserStory/UserStoryContainer";
import data from "../../data";
import "./HomePage.scss";
import Features from "../Fetures/Features";
import { motion } from "framer-motion";

export default function HomePage(props) {
  const [load , setLoad] = useState(true)
  useEffect(() => {
    const animate = setTimeout(() => {
       setLoad(false)
    }, 500)
  
    return () => {
      clearTimeout(animate)
    }
  }, [])

  const photoCardData = data.photoCardData;
  const photoCardRender = photoCardData.map((photoCard) => {
    return <PhotoCard {...photoCard} />;
  });

  return (
    <>
      <section className="hp__container">
        <motion.div initial={{x:"-30vw"}} animate={load ? {x:0}:{x:0}}>
        {photoCardRender}
        <UserStory page="home" />
        <Features page="home" />
        </motion.div>
      </section>
    </>
  );
}
