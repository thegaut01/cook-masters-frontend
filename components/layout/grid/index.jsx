
import Router from "next/router"

import styles from "./index.module.scss"

//the first passed div is a row 
export default function Comp({children, reverse}) {

   return (
      <div className={styles.grid} style={ reverse ? { flexDirection: 'row-reverse' } : null } >
         {children}
         {/* {children.length} */}
         
      </div>
   )

}
