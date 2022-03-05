import React from "react";
import StoryCard from "./StoryCard";
import style from "./USContainer.module.scss";
import data from "../../data";
import {motion} from "framer-motion"
// const StoryPageData = data.StoryPageData;
const HomePageData = data.StoryPageData.slice(0,4);

export default function UserStory(props) {

  
  const layoutClassName = props.page === "home" ? style.US__layoutHome : style.US__layoutStory

  return (
    <>
    <motion.section 
    layout
    className={`${style.US__container} ${layoutClassName} `}
    >
      {props.page === "home" ? 
        <>
        {HomePageData.map(item => 
          <StoryCard key={item.id} page={props.page} item={item} />
        )}
        </>
        :
        <>
        {props.StoryPageData.map(item => 
          <StoryCard key={item.id} page={props.page} item={item} />
        )}
        </>
      }
    </motion.section>
    </>
  );
}
