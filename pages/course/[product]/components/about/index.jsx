
import styles from "./index.module.scss"

import Image from 'next/image'
import Link from 'next/link'
import { useState, } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import Grid from "/components/layout/grid";

import useSiteDefaults from "/context/siteDefaults.js";
import useModalState from "/context/modalState.js";

import ArticleSVG from '/public/icon/article.svg'
import CrossSVG from '/public/icon/cross.svg'
import LogoSVG from '/public/icon/logo.svg'
import PlaySVG from '/public/icon/play.svg'
import WikiSVG from '/public/icon/wiki.svg'

export default function Comp({data}) {

   const siteDefaults = useSiteDefaults( (S)=> S.siteDefaults );
   const toggleModalState = useModalState( (S)=> S.toggle );
    
   return (
      <div className={styles.wrap}>

      <Grid>
         <div className={`${styles.about} col-5`}>
            <div className={styles.about_wrap}>
               <div className={styles.title}>
                  <h2 data-collab={siteDefaults.brand} >{data.author.name}</h2>
               </div>
               <h3><span>the best of</span> <div className={styles.line}></div></h3>
               <p>{data.aboutProj}</p>
               <Link href="/blog">
                  <a> 
                     <strong>read anouncement article</strong> 
                     <span> <ArticleSVG /> </span> 
                  </a>  
               </Link>
               <div className={styles.author_autograph}>{data.author.name}</div> 
            </div>
         </div>

         <div className={`${styles.trailer} col-2`}>
            <div className={styles.vid} onClick={ ()=> toggleModalState('vid', data.promotional.trailer) } >
               <video src={data.promotional.trailerThumb}  autoPlay muted loop playsInline />

               <div className={styles.btn} data-duration={data.promotional.trailerDuration} >
                  <span>trailer</span>
                  <button><PlaySVG /></button>
               </div>
            </div>
         </div>

         <div className={`${styles.author} col-5`}>
            <div className={styles.author_wrap}>
               <a href={`https://en.wikipedia.org/wiki/${data.author.name.replace(/\s+/g,'-')}-f2ks9ldw856jn54e`} target="_BLANK" rel="noreferrer"> 
                  <strong>read wiki article</strong> 
                  <span> <WikiSVG /> </span>
               </a>
               <h3>
                  <span>about the author</span> 
                  <div className={styles.line}></div>
                  <div className={styles.pic}> <Image src={data.author.pic} layout='fill' objectFit="cover" alt="data.title"/> </div>
               </h3>
               <p>{data.author.about}</p>
               <div className={styles.collab}>
                  <div className={styles.author_collab}>{data.author.name}</div> 
                  <CrossSVG/> 
                  <div className={styles.brand_collab}><strong>{siteDefaults.brand}</strong>  <LogoSVG/></div>
               </div>
            </div>
         </div>

      </Grid>

      </div>

   )

}
