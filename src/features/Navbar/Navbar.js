import React, { useState } from 'react';
import style from "./Navbar.module.scss"
import logo from "../../assets/Shared/desktop/logo.svg";
import menuIcon from "../../assets/Shared/mobile/menu.svg";
import menuCloseIcon from "../../assets/Shared/mobile/close.svg";
import { Link } from 'react-router-dom';
import Links from './Links';


export default function Navbar(props) {
   const [openMenu , setOpenMenu] = useState(false)

   const handleMenuOpen = () => {
      setOpenMenu(prev => !prev)
   }

  return (
   <>
      <nav className={style.nav}>
         <div className={style.nb__logo}>
            <Link to="/">
               <img src={logo} alt="photosnap logo" />
            </Link> 
         </div>
         { props.isDesktop ?
            <div className={style.nb__desktop_links}>
               <div className={style.nb__dektop_container}>
                  <Links />
               </div>
            </div> 
            :
            <div className={style.nb__mobile_links}>
               <div className={style.nb__mobile_menu_icon} onClick={handleMenuOpen}>
                  {  !openMenu ? 
                     <img src={menuIcon} alt="" /> 
                     :
                     <img src={menuCloseIcon} alt="" />
                  }
               </div>
               <div className={`${style.nb__mobile_container} ${openMenu ? style.nb__MenuOpen : ""}`}>
                  <Links />
                  <div className={style.button}>
                     <button>get an invite</button>
                  </div>
               </div>
            </div>
         }
      </nav>
   </>
  );
}
