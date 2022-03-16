import React, {useState, useEffect} from 'react'
import style from "./StoryPage.module.scss"
import { useMediaQuery } from 'react-responsive'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {MdOutlineMenuBook} from "react-icons/md"
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
  console.log(storyData)
  return (
     <>
     <section className={style.story__page_container}>
     {storyData.map((item) =>
      <motion.div key={item.id} initial={{x:"-30vw"}} animate={load ? {x:0}:{x:0}}>
            <div className={style.story__header}>
               <img src={isDesktop ? item.dImg:item.mImg} alt="" />
               <div className={style.story__header_content}>
                  <div>
                     <h1>{item.heading}</h1>
                     <p><span>{item.date}</span>{item.author}</p>
                  </div>
               </div>
            </div>
            <article className={style.story__main_body}>
               <div 
               className={style.story__title_Section}>
                  <MdOutlineMenuBook />
                  <span>{item.heading}</span>
                  
               </div>
               <div className={style.story__text}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quaerat ipsa dignissimos necessitatibus voluptas, nisi ducimus ut ea veniam magnam.
                  <br/><br/>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat sapiente illum saepe blanditiis, sequi explicabo sunt, ipsam perferendis numquam dolore soluta expedita corrupti labore? Neque id at adipisci animi? Reprehenderit.
                  <br/><br/>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi atque neque assumenda nemo velit! Esse excepturi minima, placeat nisi rem tempora maiores saepe assumenda iste sed earum explicabo suscipit doloremque?
                  <br/><br/>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quasi soluta quam ullam magni vero quia in inventore aut ipsam sit neque, odit architecto laborum iste labore eaque porro odio tempora alias. In dolores facere ipsam impedit odio similique ducimus.
                  <br/><br/>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quasi repellat, atque facilis nobis et alias natus est porro amet fugiat quia illo aspernatur odio aperiam, eveniet quas, assumenda modi sapiente aliquam deserunt! Soluta nostrum quaerat illo deserunt et voluptatum earum delectus excepturi temporibus? Illum autem obcaecati ratione repellendus quasi inventore explicabo nostrum, necessitatibus quod praesentium fuga unde nisi modi nulla sapiente facilis, adipisci, nesciunt maiores vitae reprehenderit! Suscipit, maiores!
                  <br/><br/>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, magni soluta vel ducimus incidunt vero alias laudantium quo sed, distinctio adipisci blanditiis, ad ullam. Aspernatur maxime vel assumenda incidunt laudantium, quisquam et corporis dolore cumque expedita impedit fugit atque at itaque ducimus similique ea voluptas amet voluptates alias aperiam ad quidem reiciendis accusantium! Quis a explicabo, sunt eius soluta accusamus excepturi, molestias accusantium fuga ullam nobis perspiciatis quae impedit ipsam porro assumenda enim mollitia aspernatur eaque officiis et exercitationem vero beatae? At exercitationem, quisquam atque vel, assumenda repellat placeat maiores sequi tempora, pariatur doloribus corrupti rem sunt! Totam, delectus id?
                  <br/><br/>
               </div>
            </article>
      </motion.div>
     )}
     </section>
     </>
  )
}