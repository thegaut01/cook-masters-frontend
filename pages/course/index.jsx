
import styles from './index.module.scss'

import Grid from "/components/layout/grid";
import Card from "/components/sub-components/card";

import sanity from '/lib/sanity.js'
import imageUrlBuilder from '@sanity/image-url'

export async function getStaticProps(context) {

   const builder = imageUrlBuilder(sanity)
   function urlFor(source) {
      return builder.image(source)
   }
       
   const query = ` *[_type == "product" ] { title, author->, image, stats, promotional{ contentDuration }, slug } | order(_createdAt desc) `
   const productIndexData = await sanity.fetch(query);
   
   return {
      props: {

         productIndex: productIndexData.map( (obj)=> { return {
            ...obj, //Extract the url for all Images>>
            image: urlFor(obj.image).width(400).url(), 
            author:  {...obj.author, pic: urlFor(obj.author.pic).width(30).url(), }
         }} ),
         
      }
   }
}


export default function comp({productIndex}) {

   return (
      <div className={styles.prods}>
         <h1>discover our courses</h1>
         <Grid>
            { productIndex.map( (D,i)=> <div className={`gridcard`} key={"prod_index_"+i}> <Card data={D}/> </div> )}
            { productIndex.map( (D,i)=> <div className={`gridcard`} key={"prod_index_"+i}> <Card data={D}/> </div> )}
            { productIndex.map( (D,i)=> <div className={`gridcard`} key={"prod_index_"+i}> <Card data={D}/> </div> )}
         </Grid>
      </div>
   )
}
