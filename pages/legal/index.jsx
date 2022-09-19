
import styles from './index.module.scss'

import pageData from '/public/data-static'

export async function getStaticProps(context) {

   return {
      props: {
         data: pageData.legal,
      }
   }
}

export default function Comp({data, }) {
   return (
      <div className={styles.tos}>
         <h4>table of content</h4>
         <ul className={styles.content}>
            <li><a href="#terms">Terms of use</a></li>
            <li><a href="#privacy">Privacy policy</a></li>
            <li><a href="#dmca">DMCA</a></li>
         </ul>
         <br />

         <h1 id="terms">Terms of use:</h1>
         {data.tos.map((D,i)=> <article key={"article"+i+D.head.slice(0,5)}>
            <h2> {D.head} </h2>
            <p> {D.body} </p>
         </article> )}
         <br />

         <h1 id="privacy">Privacy policy:</h1>
         {data.privacy.map((D,i)=> <article key={"article"+i+D.head.slice(0,5)}>
            <h2> {D.head} </h2>
            <p> {D.body} </p>
         </article> )}
         <br />

         <h1 id="dmca">DMCA:</h1>
         {data.dmca.map((D,i)=> <article key={"article"+i+D.head.slice(0,5)}>
            <h2> {D.head} </h2>
            <p> {D.body} </p>
         </article> )}
         <br />

      </div>

   )

}
