
import styles from "./index.module.scss"

export default function Comp({children}) {

   return (
      <div className={styles.pagewrap}>{children}</div>

   )

}
