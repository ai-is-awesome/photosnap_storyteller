import React from 'react'
import FormClose from './FormClose'
import style from "./StoryForm.module.scss"
import { motion } from "framer-motion"

export default function StoryForm(props) {
  return (
    <motion.section 
    className={style.storyform__container}
    initial={{x:"100vw"}}
    animate={{x: 0}}
    >
       <FormClose setStoryForm={props.setStoryForm}/>
    </motion.section>
  )
}
