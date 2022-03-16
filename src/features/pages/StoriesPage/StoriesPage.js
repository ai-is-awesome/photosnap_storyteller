import React, { useState,useEffect } from 'react'
import UserStory from '../../UserStory/UserStoryContainer'
import USTopCard from '../../UserStory/USTopCard'
import AddStory from './AddStory'
import StoryForm from './StoryForm/StoryForm'
import style from "./StoriesPage.module.scss"
import { motion } from 'framer-motion'

export default function StoriesPage(props) {
  const [storyForm, setStoryForm] = useState(false)
  const [load , setLoad] = useState(true)
  useEffect(() => {
    const animate = setTimeout(() => {
       setLoad(false)
    }, 500)
  
    return () => {
      clearTimeout(animate)
    }
  }, [])

  return (
    <>
      <motion.section 
      initial={{x:"-30vw"}}
      animate={load ? { x:0 }: { x:0 }}
      className={style.sp__container}>
        <USTopCard />
        <UserStory StoryPageData={props.StoryPageData} page="stories" />
      </motion.section>

      {/* //add story - getting the form popup */}
      <AddStory setStoryForm={setStoryForm} />
      {storyForm ? 
        <StoryForm storyForm={storyForm} setStoryForm={setStoryForm}/> 
        : ""
      }
    </>
  )
}
