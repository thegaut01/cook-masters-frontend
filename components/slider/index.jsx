
import styles from "./index.module.scss"

import Link from 'next/link'
import { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import Card from '/components/sub-components/card'

import ArrowSVG from "/public/icon/arrow.svg"

export default function Comp({data, label}) {
   
   const sliderprev = useRef(null)
   const slidernext = useRef(null)

   return (
      <Swiper
         className={styles.slider}
         modules={[Navigation, Scrollbar]}
         slidesPerView={1.3}
         spaceBetween={8}

         breakpoints={{
            420: {
               slidesPerView: 1.5,
               spaceBetween: 12,
            },
            620: {
               slidesPerView: 2,
               spaceBetween: 12,
            },
            820: {
               slidesPerView: 2.5,
               spaceBetween: 12,
            },
            1020: {
               slidesPerView: 3,
               spaceBetween: 16,
            },
            1300: {
               slidesPerView: 3.8,
               spaceBetween: 20,
            },
         }}

         // scrollbar={{ draggable: true, dragSize: 100 }}

         onInit={(swiper) => {
            swiper.params.navigation.prevEl = sliderprev.current;
            swiper.params.navigation.nextEl = slidernext.current;
            swiper.navigation.init();
            swiper.navigation.update();
         }}
      >  

         <div  className={styles.navigation}>
            <button className={styles.arrow} ref={sliderprev}><ArrowSVG/></button>
            <button className={styles.arrow} ref={slidernext}><ArrowSVG/></button>
         </div>

         <SwiperSlide key={'label'}>
            <div className={styles.label}>
               <div className={styles.wrap}>
                  <div>
                     <h2>{label.title}</h2>

                     <Link href={label.url}>
                        <a className={styles.link}> 
                           <strong>{label.link}</strong> 
                           <span><ArrowSVG/></span> 
                        </a> 
                     </Link>
                  </div>
                  
               </div>
            </div>
         </SwiperSlide>
         
         {data.map( (D,i) => <SwiperSlide key={D.title + i}> 
            <Card data={D} />
         </SwiperSlide>)}

      </Swiper>
      
   )

}
