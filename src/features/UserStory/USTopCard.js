import React from 'react'
import style from "./USTopCard.module.scss"
import { FeaturedStory } from './Data/StoriesData'
import { useMediaQuery } from "react-responsive";
import arrow from "../../assets/Shared/desktop/arrow.svg";


const { id, mImg, dImg, subTitle, title, date, author, prevStory } = FeaturedStory;


export default function USTopCard() {

   const isDesktop = useMediaQuery({
      query: "(min-width: 1224px)",
    });

    const Img = isDesktop ? dImg : mImg;

  return (
    <div key={id} className={style.utc__container}>
         <div className={style.utc__image_container}>
               <img src={Img} alt={Img} />
         </div>
         <div className={style.utc__text_content}>
            <p>{subTitle}</p>
            <h2>{title}</h2>
            <p>{date}<span> {author}</span></p>
            <p>{prevStory}</p>
            <div className={style.utc__link}>
               <p>read the story</p>
               <img src={arrow} alt="->" />
            </div>
         </div>
    </div>
  )
}
