import React, {useState, useEffect} from 'react'
import style from "./StoryPage.module.scss"
import { useMediaQuery } from 'react-responsive'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function StoryPage(props) {
   const { id } = useParams();
   const [load , setLoad] = useState(true)

   useEffect(() => {
     const animate = setTimeout(() => {
        setLoad(false)
     }, 500)
   
     return () => {
       clearTimeout(animate)
     }
   }, [])
   const isDesktop = useMediaQuery({   
      query: '(min-width: 1224px)'
   })

   //FILTERING STORYDATA based on the url id
   const storyData = props.StoryPageData.filter((item) => item.id === parseInt(id))
  return (
     <>
     <section className={style.story__page_container}>
     {storyData.map((item) =>
      <motion.div initial={{x:"-30vw"}} animate={load ? {x:0}:{x:0}}>
            <div className={style.story__header}>
               <img src={isDesktop ? item.dImg:item.mImg} alt="" />
               <div className={style.story__header_content}>
               </div>
            </div>
      </motion.div>
     )}
     </section>
     </>
  )
}