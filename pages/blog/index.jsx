
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
   
   const query = ` *[_type == "blog" ] { title, author->, image, stats, date, promotional{ contentDuration }, slug }  | order(_createdAt desc) `
   const indexData = await sanity.fetch(query);
   
   return {
      props: {

         blogIndex: indexData.map( (obj)=> { return {
            ...obj, //Extract the url for all Images>>
            image: urlFor(obj.image).width(400).url(), 
            author:  {...obj.author, pic: urlFor(obj.author.pic).width(30).url(), },
            promotional: { contentDuration: obj.stats[0]+' mins'},
         }} ),
         
      }
   }
}


export default function comp({blogIndex}) {

   return (
      <div className={styles.blogs}>
         <h1>Read all blogs</h1>
         <Grid>
            { blogIndex.map( (D,i)=> <div className={`gridcard`} key={"blog_index_"+i}> <Card data={D}/> </div> )}
         </Grid>
      </div>
   )
}
