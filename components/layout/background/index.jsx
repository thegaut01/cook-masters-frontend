
import styles from "./index.module.scss"

import Image from "next/image"

const graphics = []
for (let i=1; i <=7; i++) {
   graphics.push(`/icon/graphics/vec${i}.svg`)
}

export default function Bkg() {

   return (
      <>
      <div className={styles.bkg} ></div>
      <div className={styles.graphics} >
         {graphics.map( (D,i)=> <div className={styles.vec} key={'vec'+i}><Image src={D} layout='fill' objectFit="contain" alt="vector graphic" /></div> )}
      </div>
      </>

   )

}
