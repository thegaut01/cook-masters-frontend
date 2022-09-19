
import styles from "./index.module.scss"

import Link from 'next/link'
import Image from 'next/image'

import Rating from '/components/sub-components/rating'

import PlaySVG from "/public/icon/play.svg";
import ArrowSVG from "/public/icon/arrow.svg";
import TimeSVG from "/public/icon/time.svg";
import UserSVG from "/public/icon/user.svg";

import useGetStats from '/hooks/useGetStats.js';
import useTimeSince from '/hooks/useTimeSince.js';

export default function Comp({data,}) {

   const [initialPrice, productPrice, productRating, reviewCount, userCount, discountRate] =useGetStats( (data.stats.length >= 5) ? data.stats : []);

   const inBlog= !initialPrice

   const releaseDate = useTimeSince(inBlog && data.date)

   return (
      <Link href={`${inBlog?'/blog/':'/course/'}${data.slug.current}`} >
         <a>
            <div className={styles.card} >

               <div className={styles.wrap}>

                  <div className={styles.head} >
                     <div className={styles.img}>
                        <Image src={data.image} layout="fill" objectFit="cover" alt={data.title} />
                     </div>

                     <div className={styles.author}>
                        <span> <Image src={data.author.pic} layout={'fill'} objectFit="contain" alt="author picture"/> </span>
                        <strong> {data.author.name} </strong>
                     </div>

                     {!inBlog && <div className={styles.discount}> <strong>-{discountRate}%</strong> off</div>}

                     <div className={styles.info}>
                     {!inBlog && <div className={styles.pricing}> 
                        <div><mark>$</mark><span>{productPrice}</span><del>{initialPrice}</del> </div> </div> }
                        <button className={styles.link} style={inBlog?{background:'#fb6',}:null}> {inBlog?<ArrowSVG/>:<PlaySVG/>} </button>
                     </div>

                  </div>


                  <div className={styles.body} >
                     <h4>{data.title} </h4>
                     <div className={styles.stats}>
                        {!inBlog && <Rating rating={ [productRating,]} minimize light style={{marginBottom:"initial",}} />}
                        <div className={styles.stat}><TimeSVG/> {data.promotional.contentDuration} </div>
                        <div className={styles.stat}><UserSVG/> {userCount || data.stats[1]} </div>
                        {inBlog && <div className={styles.stat} style={{opacity:'.5', marginLeft:'auto', marginRight:'1rem'}}>{releaseDate} ago</div>}
                     </div>

                  </div>

               </div>
            </div>
         </a>
            
      </Link>
   )

}
