import React, {useState, useEffect} from "react";
import { useMediaQuery } from "react-responsive";
import Compare from "./Compare";
import PriceCardGroup from "../../PriceCard/PriceCardGroup";
import style from "./PricingPage.module.scss"
import { motion } from "framer-motion";

export default function PricingPage() {
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
    query: "(min-width: 1224px)",
  });

  return (
    <motion.section 
    initial ={{x: "-30vw"}}
    animate ={load ? {x:0}:{x:0}}
    className={style.pp__container}>
      <PriceCardGroup />
      <Compare desktop={isDesktop} />
    </motion.section>
  );
}
