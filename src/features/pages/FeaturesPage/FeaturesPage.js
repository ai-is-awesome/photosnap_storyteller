import React, {useState, useEffect} from 'react'
import Features from '../../Fetures/Features'
import style from "./FeaturesPage.module.scss"
import { motion } from 'framer-motion'

export default function FeaturesPage() {
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
      initial={{x: "-30vw"}}
      animate={load?{x: 0}:{x: 0}}
      className={style.fp__container}>
        <Features page="features" />
      </motion.section>
    </>
  )
}
