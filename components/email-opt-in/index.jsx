
import styles from "./index.module.scss"

import BellSVG from "/public/icon/bell.svg";

export default function Comp({headless}) {

   return (
      <div className={styles.form} style={ headless? {maxWidth:'initial', marginLeft:'initial'}: null }>
         { !headless && <div className={styles.label}>
            <h2>notify me later <BellSVG/></h2>
            <p>Enter your email adress and we will notify you once you become less busy.</p>
         </div>}

         <iframe name="dummyframe" id="dummyframe" style={{display:'none'}} ></iframe>
         <form action="https://gmail.us12.list-manage.com/subscribe/post?u=9b05cc73e8b29d5a1ecde31da&amp;id=e95b249e24&amp;f_id=00dab7e0f0" method="post" target="_Blanc" name="mc-embedded-subscribe-form">
            <input type="email" placeholder="enter email…" required name="EMAIL" />
            <button type="submit" name="subscribe" >{ headless? 'sign up now': 'send to inbox' }</button>
         </form>

      </div>

   )

}
