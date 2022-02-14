import React from 'react'
import style from "./Compare.module.scss"
import check from "../../../assets/Pricing/desktop/check.svg"
import { compareData, CompareTitles } from './Data'

const [ mobileTopTitle, ...otherTitles ] = CompareTitles

export default function Compare({ desktop }) {

   return (
    <>
      <div className={style.compare__container}>
            <h2>compare</h2>
         <div className={style.compare__inner_container}>
            <div className={style.compare__titles}>
               {desktop ? 
                  <>{CompareTitles.map((i, index) => <div key={index}><p>{i}</p></div>)}
                  </> : 
                  <><div><p>{mobileTopTitle}</p></div></>
               }
            </div>
            {compareData.map(i => 
               <div key={i.id} className={style.compare__data}>
                  <div>{i.title}</div>
                  {desktop ?
                     <>
                        <div>{i.basic ? <img src={check} alt="" />:""}</div>
                        <div>{i.pro ? <img src={check} alt="" /> :""}</div>
                        <div>{i.business ? <img src={check} alt="" />:""}</div>
                     </>:
                     <div className={style.compare__mobile_check}>
                        <div>
                           {otherTitles.map((i, index) => <div key={index}><p>{i}</p></div>)}
                        </div>
                        <div>
                           <div>{i.basic ? <img src={check} alt="" />:""}</div>
                           <div>{i.pro ? <img src={check} alt="" /> :""}</div>
                           <div>{i.business ? <img src={check} alt="" />:""}</div>
                        </div>
                     </div>
                  }
               </div>   
            )}
         </div>

      </div>
    </>
  )
}
