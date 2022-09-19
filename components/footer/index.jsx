
import styles from "./index.module.scss"

import Link from 'next/link'

import Wrap from '/components/layout/wrap'

import useSiteDefaults from "/context/siteDefaults.js";

import LogoSVG from '/public/icon/logo.svg'
import CopySVG from '/public/icon/copy.svg'

import PaySVG_1 from '/public/icon/payment/pay1.svg'
import PaySVG_2 from '/public/icon/payment/pay2.svg'
import PaySVG_3 from '/public/icon/payment/pay3.svg'
import PaySVG_4 from '/public/icon/payment/pay4.svg'

export default function Comp() {

   const siteDefaults = useSiteDefaults( (S)=> S.siteDefaults );

   return (
      <>
      <div className={styles.top}>
         <div className={styles.l1}></div>
      </div>

      <footer className={styles.footer}>
      <Wrap>
      <div className={styles.wrap}>
         <div className={styles.brand}>
            <div className={styles.logo}> <div><LogoSVG/> <span>{siteDefaults.brand}</span></div> </div>
            <p className={styles.about}><strong>{siteDefaults.brand}: </strong>{siteDefaults.about}</p>
            <div className={styles.copy}>All rights reserved <CopySVG/>{siteDefaults.brand}{siteDefaults.copy}</div>

            <div className={styles.payment}> <PaySVG_1/> <PaySVG_2/> <PaySVG_3/> <PaySVG_4/> </div>

         </div>   

         <div className={styles.links}>
            <div>
               <div className={styles.title}>discover</div>
               <ul>
                  <li><Link href="/about"><a>about us</a></Link></li>
                  <li><Link href="/contact"><a>collaborate</a></Link></li>
               </ul>
            </div>

            <div>
               <div className={styles.title}>social</div>
               <ul>
                  <li><a href="https://www.facebook.com" target='_blank' rel="noreferrer">facebook</a></li>
                  <li><a href="https://www.twitter.com" target='_blank' rel="noreferrer">twitter</a></li>
                  <li><a href="https://www.pinterest.com" target='_blank' rel="noreferrer">pinterest</a></li>
               </ul>
            </div>

            <div>
               <div className={styles.title}>further information</div>
               <ul>
                  <li><Link href="/legal"><a>terms of use</a></Link></li>
                  <li><Link href="/legal"><a>privacy policy</a></Link></li>
                  <li><Link href="/legal"><a>cookie policy</a></Link></li>
                  <li><Link href="/legal"><a>copyright Infringement</a></Link></li>
                  <li><Link href="/contact"><a>contact</a></Link></li>
               </ul>
            </div>

         </div>  

      </div>
      </Wrap>
      </footer>

         <div className={styles.bottom}> <Wrap><CopySVG/><span>{siteDefaults.brand}</span> is a product of {siteDefaults.parent}, <a href={siteDefaults.studio[2]}>made in collaboration with <u><em>{siteDefaults.studio[0]}</em> in {siteDefaults.studio[1]}.</u></a></Wrap> </div>
      </>
   )

}
