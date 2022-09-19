
import styles from "./index.module.scss"

import Image from 'next/image'
import { useState, } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import ArrowSVG from '/public/icon/arrow.svg'

export default function Comp({data}) {
    
   const [disheIndex, setDisheIndex] = useState(0)
   
   return (
      <div className={styles.wrap}>
         {/* <h5>The Most Iconic Dishes</h5> */}

         <div className={styles.imgwrap}> 
            <SwitchTransition mode={'out-in'}>
            <CSSTransition
               key={disheIndex}
               addEndListener={(node, done) => {
               node.addEventListener("transitionend", done, false);
               }}
               classNames="disheanim"
            >
            <div>
               <div className={styles.img}>
                  <Image src={data[disheIndex].image} layout={'fill'} objectFit="contain" alt={data[disheIndex].title}/>
               </div>
               
            </div>
            </CSSTransition>
            </SwitchTransition>
          
         </div>

         <div  className={styles.navigation}>
            <button className={styles.arrow} onClick={ ()=> setDisheIndex( S => ((S -1) < 0 ) ?  data.length -1 : (S -1)) }><ArrowSVG/></button>
            <button className={styles.arrow} onClick={ ()=> setDisheIndex( S => (S +1) % data.length ) }><ArrowSVG/></button>
         </div>

         <div className={styles.body}>

            <div className={styles.progress}>
               <div className={styles.num}>{disheIndex<9?'0':null}{disheIndex +1}</div>
               <div className={styles.bar}>
                  <div className={styles.prog} style={{
                     width: 100 / data.length * (disheIndex +1) +"%",
                  }}></div>
               </div>
               <div className={styles.num}>{data.length<9?'0':null}{data.length}</div>
            </div>

            <SwitchTransition mode={'out-in'}>
            <CSSTransition
               key={disheIndex}
               addEndListener={(node, done) => {
               node.addEventListener("transitionend", done, false);
               }}
               classNames="dishetextanim"
            >
            <div>
               <h4>{data[disheIndex].title}</h4>
               <p className={styles.disc}>{data[disheIndex].discription}</p>
               <ul className={styles.details}>
                  {data[disheIndex].details.map((D,i) => <li key={"dishe detail"+i+disheIndex}> 
                        <span className={styles.icon}> <Image src={D.img} layout={'fill'} objectFit="contain" alt={"icon"}/> </span>
                        <strong>{D.data}</strong>    
                        <mark>{D.disc}</mark> 
                     </li>
                  )} 
               </ul> 
               <p className={styles.quote}>{data[disheIndex].quote}</p>

            </div>
            </CSSTransition>
            </SwitchTransition>

         </div>
               
      </div>

   )

}
