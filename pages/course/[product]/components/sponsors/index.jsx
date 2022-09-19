
import styles from "./index.module.scss"
import Image from "next/image";

export default function Comp({data}) {

   return (
      <div className={styles.wrap}>
         <div className={styles.sponsors}>
            {data.map((D,i) => <div key={"sponsor"+i} className={styles.sponsor}>
               <Image src={D} layout="fill" objectFit="contain" alt={"brand 1"} />
            </div>)}
         </div>

      </div>

   )

}
