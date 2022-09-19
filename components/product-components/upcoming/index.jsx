
import Link from "next/link";
import { useRouter } from 'next/router'

import styles from "./index.module.scss"

import Email from "/components/email-opt-in";
import Banner from "/components/banner";

import TimeSVG from "/public/icon/time.svg";
import ArrowSVG from "/public/icon/arrow.svg";
 

export default function Comp({data}) {
   const router = useRouter()

   return (
      <>
         <Banner data={data}>
            <div>
               <Link href='/'>
                  <a className={styles.link} onClick={() => router.back()} > <span><ArrowSVG/></span> <strong>go back</strong> </a>
               </Link>
               <div className={styles.msg}>
                  <p>is launching very soon, sign up to get notified <TimeSVG/> </p>
               </div>
               <Email headless/>
            </div>
         </Banner> <br/>
      </>

   )

}
