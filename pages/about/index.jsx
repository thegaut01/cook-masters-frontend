
import styles from './index.module.scss'

import Banner from "/components/banner";
import Feature from '/components/feature'

import pageData from '/public/data-static'

export async function getStaticProps(context) {

   return {
      props: {
         data: pageData.about,
      }
   }
}

export default function comp({data}) {

      const {head, items} = data;

      return (
      <>
         <Banner data={head} ></Banner> <br />
         
         <main className={styles.body}>
            {items.features.map( (D,i)=> <> <Feature data={D} key={D.title + i} reverse={!!(i%2)} /> <br /> </>)}
         </main>
      </>
      )
}
