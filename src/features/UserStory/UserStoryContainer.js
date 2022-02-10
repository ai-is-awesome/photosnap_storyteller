import React from "react";
import { HomePageData, StoryPageData } from "./Data/StoriesData";
import StoryCard from "./StoryCard";
import style from "./USContainer.module.scss";

export default function UserStory(props) {
  
  const layoutClassName = props.page === "home" ? style.US__layoutHome : style.US__layoutStory

  return (
    <>
    <section 
    className={`${style.US__container} ${layoutClassName} `}
    >
      {props.page === "home" ? 
        <>
        {HomePageData.map(item => 
          <StoryCard page={props.page} item={item} />
        )}
        </>
        :
        <>
        {StoryPageData.map(item => 
          <StoryCard page={props.page} item={item} />
        )}
        </>
      }
    </section>
    </>
  );
}
