
import Image from 'next/image'
import { useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import styles from "./index.module.scss"

import Rating from '/components/sub-components/rating'
import Coup from '/components/sub-components/coup'

import useInterval from '/hooks/useInterval.js'
import useGetStats from '/hooks/useGetStats.js'
import useModalState from "/context/modalState.js";

import PlaySVG from "/public/icon/play.svg";
import ArrowSVG from "/public/icon/arrow.svg";

export default function Comp({data, slides, coupon, }) {

   const [initialPrice, productPrice, productRating, reviewCount, userCount, discountRate] = useGetStats(data.stats);
   const toggleModalState = useModalState( (S)=> S.toggle );

   const [slideIndex, setSlideIndex] = useState(0);
   useInterval(() => { slides && setSlideIndex( (count)=> ( count+1 >= slides.length ? 0 : count+1 ) ); }, 3000);
   
   return (
      <div className={styles.hero} >

         { coupon && <Coup data={[...coupon, discountRate]} /> }

         <div className={styles.scroll}>
            <strong>scroll</strong>
            <span> <ArrowSVG/> </span>
         </div>

         <SwitchTransition mode={'out-in'}>
         <CSSTransition
            key={slideIndex}
            addEndListener={(node, done) => {
               node.addEventListener("transitionend", done, false);
            }}
            classNames="fadeanim"
         >
            <div className={styles.heroart} onClick={ ()=> toggleModalState('vid', data.heroVid) } > 
               {slides? <div className={styles.img}> <Image src={slides[slideIndex]} layout='fill' objectFit='cover' alt={"hero artwork " }/> </div>
               : <div className={styles.img}> <Image src={data.image} layout='fill' objectFit='cover' alt={"hero artwork " }/> </div>}
               
               <div className={styles.btn} >
                  <button><PlaySVG /></button>
               </div>
            </div>
         
         </CSSTransition>
         </SwitchTransition>
   
         <div className={styles.body}>
            <h1>{data.header}</h1>
            <Rating rating={[productRating, reviewCount, userCount, ]} style={{transform:'scale(1.3)'}} />
            <p>{data.discription}</p>
         </div>

         <ul className={styles.info}>
            {data.info.map( (D,i) => <li key={"info-item"+i}>
               <strong>
                  <div> <Image src={D.img} layout={'fill'} objectFit="contain" alt={"info icon"}/> </div>
                  {D.data}
               </strong>
               <span>{D.disc}</span>
            </li>)}
         </ul>

      </div>
   )

}
