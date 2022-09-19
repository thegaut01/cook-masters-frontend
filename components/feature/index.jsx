
import Link from "next/link"
import Image from "next/image"

import styles from "./index.module.scss"

import Grid from "/components/layout/grid"

import useModalState from "/context/modalState.js";

import ArrowSVG from "/public/icon/arrow.svg"
import PlaySVG from '/public/icon/play.svg'

export default function Comp({data, reverse}) {

   const toggleModalState = useModalState( (S)=> S.toggle );

   return (
      <Grid reverse={reverse}>
         <div className={`${styles.media} col-6`} >
            {data.image?(<div className={styles.img}>
               <Image src={data.image} layout='fill' objectFit="cover" alt="data.title"/>
            </div>):
            (<div className={styles.vid} onClick={ ()=> toggleModalState('vid', data.video[0]) }>
               <video src={data.video[1]} autoPlay muted loop playsInline />

               <div className={styles.btn} data-duration={data.video[2]} >
                  <span>samples</span>
                  <button><PlaySVG /></button>
               </div>
            </div>)}
         </div>

         <div className={`${styles.text} col-6`} >
            <div className={styles.text_wrap}>
               {data.image && <h4>{data.subtitle}</h4>}
               <h2>{data.title}</h2>
               <p>{data.text}</p>
               {data.link && <Link href={data.link[1]}>
                  <a className={styles.link}> <strong>{data.link[0]}</strong> <span><ArrowSVG/></span> </a>
               </Link>}
            </div>
         </div>

      </Grid>
   )

}
