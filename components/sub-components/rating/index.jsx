
import styles from "./index.module.scss"

import Star from '/public/icon/star.svg'
import CommSVG from '/public/icon/comm.svg'
import ViewSVG from '/public/icon/view.svg'

export default function Comp({minimize, rating, style, light}) {

   const [productRating, reviewCount, userCount,] = rating;

   let starWidth = (productRating - 0.03) * 20;

   return (
      <div className={styles.rating} style={style}>

         <div className={styles.avg}>
            {minimize ?
            (<div className={styles.star}><Star/></div>) :
            (<div className={styles.stars}>
               <div className={styles.bkg}>
                  <Star/><Star/><Star/><Star/><Star/>
                  <div className={styles.frg} style={{width:`${starWidth}%`,}}>
                     <Star/><Star/><Star/><Star/><Star/>
                  </div>      
               </div>
            </div> )}

            <span>{productRating}</span>
         </div>

         {reviewCount && ( <div className={styles.stat}>
            <CommSVG style={light? {fill:"white",}: null}/> <span>{reviewCount}</span>
         </div> )}

         {userCount && ( <div className={styles.stat}>
            <ViewSVG style={light? {fill:"white",}: null}/> <span>{userCount}</span>
         </div> )}

      </div>      
      
   )

}
