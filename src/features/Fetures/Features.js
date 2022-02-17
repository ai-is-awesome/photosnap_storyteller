import React from 'react'
import style from "./Features.module.scss"
import { featuresData } from './data'

export default function Features(props) {
  return (
    <>
      <section className={style.feat__container}>
         {props.page === "features" ?
            <>
             {featuresData.map(i => 
            <div key={i.id} className={style.feat__item}>
               <img src={i.img} alt={i.heading} />
               <span>{i.heading}</span>
               <p>
                  {i.para}
               </p>
            </div>  
            )}  
            </> :
            <>
               {featuresData.slice(0,3).map(i => 
               <div key={i.id} className={style.feat__item}>
                  <img src={i.img} alt={i.heading} />
                  <span>{i.heading}</span>
                  <p>
                     {i.para}
                  </p>
               </div>  
               )}
            </>
         }
      </section>
    </>
  )
}
