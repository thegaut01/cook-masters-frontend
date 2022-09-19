
import {useState, } from "react"
import Link from "next/link"

import styles from "./index.module.scss"

import LogoSVG from '/public/icon/logo.svg'
import LogSVG from '/public/icon/log.svg'

import Wrap from '/components/layout/wrap'

import useSiteDefaults from "/context/siteDefaults.js";
import useModalState from "/context/modalState.js";

export default function Comp() {

   const siteDefaults = useSiteDefaults( (S)=> S.siteDefaults );

   const modalOpen = useModalState( (S)=> S.modalState.open );
   const toggleModalState = useModalState( (S)=> S.toggle );

   return (
      <nav className={styles.navbar}>
         <Wrap>
            <button className={styles.menu} onClick={ ()=> toggleModalState('menu') } >
               <div className={styles.menubtn}>
                  <div className={styles.dot} style={ modalOpen ? {width:'120%'} : null} ></div>
                  <div className={styles.dot} ></div>
                  <div className={styles.dot} ></div>
                  <div className={styles.dot} style={ modalOpen ? {width:'120%'} : null} ></div>
               </div>
            </button>
            
            <Link href="/">
               <a>
                  <button className={styles.logo}> {siteDefaults.brand} <span> <LogoSVG/></span> </button>
               </a>
            </Link>

            <button className={styles.ctabtn}><a href="#">start now</a></button> 
            <button className={styles.logbtn}><a href="#"> <LogSVG/> </a></button> 
            
         </Wrap>
      </nav>
   )

}
