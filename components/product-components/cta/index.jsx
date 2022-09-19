
import styles from "./index.module.scss"

import { useState, useEffect } from "react"
import Image from 'next/image'

import Rating from '/components/sub-components/rating'
import Grid from '/components/layout/grid'
import Coup from '/components/sub-components/coup'

import ArrowSVG from '/public/icon/arrow.svg'
import CrossSVG from '/public/icon/cross.svg'
import CheckSVG from '/public/icon/check.svg'

import useGetStats from '/hooks/useGetStats.js'
import useTimeSince from '/hooks/useTimeSince.js'

function Review({data}) {

   const timeSince = useTimeSince(data.date)

   return (
      <div className={styles.review}>

         <input type="checkbox" /> 
         <div className={styles.expand}> <strong>read</strong> <CrossSVG/> </div>

         <div className={styles.rating}>
            <Rating rating={[data.rating, null]} minimize/>
         </div>

         <div className={styles.bottombar}>
            <div className={styles.avatar}>
               <strong className={styles.date}>{timeSince} ago</strong>
               <strong>{data.name}</strong>
               <span> <Image src={data.avatar} layout="fill" alt={'profile picture'} objectFit="cover" /> </span>
            </div>
         </div>

         <div className={styles.body}>
            <div className={styles.img}> 
               <Image src={data.image} layout="fill" alt={'profile picture'} objectFit="cover" /> 
               <mark><CheckSVG/> verified purchase</mark>
            </div>
            <div className={styles.title}>{data.title}</div>
            <p>{data.text}</p>
         </div>

      </div>
   )
}

function Feature({data, }) {
   return (
      <div className={styles.feature}>
         <span className={styles.img}><Image src={data.icon} layout='fill' objectFit="contain" alt={data.title} /></span>
         <span>{data.title}</span>
      </div>

   )
}

export default function Comp({features, reviews, stats, contentDuration, coupon,}) {

   const [initialPrice, productPrice, productRating, reviewCount, userCount, discountRate] = useGetStats(stats);

   const reviewOffset = 3
   const [displayedReviewsCount, setDisplayedReviewsCount] = useState(reviewOffset);
   const [displayedReviews, setDisplayedReviews] = useState(reviews?.slice(0,displayedReviewsCount));
   useEffect(() => {
      setDisplayedReviews( reviews.slice(0,displayedReviewsCount) ) 
   }, [displayedReviewsCount]);

   function moreReviews() {

      function display () {
         setDisplayedReviews( reviews.slice(0,displayedReviewsCount) )
         console.log(12344);
      }
      display();
      
   }

   return (
      <Grid>
         <div className='col-7'>
            <h2>comments</h2>
            <div>
               {displayedReviews.map( (D,i) => <Review data={D} key={i+D.title} /> )} 
            </div>
            <div className={styles.more} onClick={()=>setDisplayedReviewsCount((s)=> s+reviewOffset)} style={ displayedReviewsCount >= reviews.length ? {display:'none'} : null } >
               <strong>load more</strong>
               <span><ArrowSVG/></span>
            </div>
         </div>

         <div className={`${styles.offer} col-5`}> 

            <h3>guaranteed satisfaction</h3>
            <div className={styles.features} > 
               <h4>satisfaction</h4>
               {features.map( (D,i) => <Feature data={D} key={i+D.title} /> )} 
               <div className={styles.vec}><Image src='/icon/graphics/vec0.svg' layout='fill' objectFit="contain" alt="vector graphic" /></div>
            </div>

            <div className={styles.cta} > 
               <div>
                  <span className={styles.img}><Image src={'/icon/money.svg'} layout='fill' objectFit="contain" alt="data.title" /></span>
                  <div>
                     <div><strong>{productPrice}</strong><mark>$</mark></div>
                     <div><del>{initialPrice}$</del></div>
                  </div>
               </div>

               <div>
                  <span className={styles.img}><Image src={'/icon/time.svg'} layout='fill' objectFit="contain" alt="data.title" /></span>
                  <div>
                     <div>content</div>
                     <div>{contentDuration}</div>
                  </div>
               </div>

               <button className={styles.ctabtn} ><a href="#">start now <span className={styles.icon}><ArrowSVG/></span> </a></button> 

            </div>

            <div className={styles.offermeta}>
               <Rating rating={[productRating, reviewCount, userCount,]} style={{marginLeft:".5em"}} minimize />
               <div className={styles.msg}>{`happy cooking (●'◡'●)`}</div>
            </div>
            <Coup data={[...coupon, discountRate]} />

         </div>

      </Grid> 

   )

}
