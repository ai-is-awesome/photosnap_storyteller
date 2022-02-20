import React from 'react'
import {GrFormClose} from "react-icons/gr"
import style from "./FormClose.module.scss"
export default function FormClose({setStoryForm}) {
  return (
    <>
      <div className={style.storyform__close_button} onClick={() => setStoryForm(prev => !prev)}><GrFormClose /></div> 
   </>
  )
}
