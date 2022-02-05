import React from "react";
import UserStory from "../UserStory/UserStoryContainer";

export default function HomePage() {
  return (
    <>
      HOME PAGE!
      <UserStory page={"home"} isDesktop={true}/>
    </> 
  );
}
