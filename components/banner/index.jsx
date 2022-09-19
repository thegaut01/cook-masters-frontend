
import Image from 'next/image'

import styles from "./index.module.scss"

export default function Comp({children, data}) {

   return (
      <div className={styles.banner} >
         <div className={styles.copy}>
            <h1>{data.title}</h1>
            <p>{data.discription}</p>
            <div className={styles.children}> {children} </div>
         </div>
         
         <div className={styles.img}> <Image src={data.image} layout='fill' objectFit='cover' alt={"banner image" }/> </div>

      </div>
   )

}
