

import styles from "./index.module.scss"

import CrossSVG from "/public/icon/cross.svg"
import QuestionSVG from "/public/icon/question.svg"


export default function Comp({data}) {

   return (
      <div className={styles.accord}>
         <div className={styles.label}>
            <h2 className={styles.title}> frequetly asked questions </h2>
            <div className={styles.icon}> <QuestionSVG/> </div>
         </div>


         <div className={styles.faqs} >
            {data.map( (D,i) =>  <div className={styles.faq} key={"faq"+i}>
               <input type="radio" name="faq" />
               <div className={styles.head}>
                  <div className={styles.title}> {D.title} </div>
                  <div className={styles.expand}> <CrossSVG/> </div>
               </div>
                  
               <div className={styles.body}>
                  <p>{D.discription}</p>
               </div>

            </div> )}
         </div>

      </div>
   )

}
