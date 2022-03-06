import React from "react";
import style from "./StoryCard.module.scss";
import arrow from "../../assets/Shared/desktop/arrow.svg";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function StoryCard(props) {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const img = isDesktop ? props.item.dImg : props.item.mImg;
  // console.log(props.item)
  return (
    <>
    <Link to={`/story/${props.item.id}`}>
      <div className={style.sc__card}>
        <img src={img} alt={props.item.heading} />
        <div className={style.sc__content}>
          {props.page === "home" ? null : <span>{props.item.date}</span>}
          <div className={style.sc__text_content}>
            <p>{props.item.heading}</p>
            <p>{props.item.author}</p>
          </div>
          <div className={style.sc__link}>
            <p>read story</p>
            <img src={arrow} alt="->" />
          </div>
        </div>
      </div>
      </Link>
    </>
  );
}
