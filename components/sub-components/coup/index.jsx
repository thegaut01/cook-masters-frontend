
import styles from "./index.module.scss"
import CheckSVG from "/public/icon/check.svg";

export default function Comp({data,}) {

   return(
      <div className={styles.coup} ><CheckSVG /> <strong>{data[0]}</strong> coupon applied <strong>-{data[2]}%</strong> , Valid until <strong>{data[1]}</strong></div>
   )

}