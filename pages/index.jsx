/* eslint-disable react-hooks/exhaustive-deps */

import Hero from '/components/hero'
import Slider from '/components/slider'
import Feature from '/components/feature'
import Email from '/components/email-opt-in'
import Faq from '/components/faq'


import staticData from '/public/data-static.js'

import sanity from '/lib/sanity.js'
import imageUrlBuilder from '@sanity/image-url'

export async function getStaticProps(context) {
   
   const builder = imageUrlBuilder(sanity)
   function urlFor(source) {
      return builder.image(source)
   }
      
   const queryProds = ` *[_type == "product" ] { title, author->, image, stats, promotional{ contentDuration }, slug } | order(_createdAt desc) `
   const productIndexData = await sanity.fetch(queryProds);

   const queryBlogs = ` *[_type == "blog" ] { title, author->, image, stats, date, promotional{ contentDuration }, slug } | order(_createdAt desc) `
   const blogIndexData = await sanity.fetch(queryBlogs);

   const imgSlides = await sanity.fetch(` *[_type == "product" ][0..4] { image, } `);

   return {
      props: {
         dataStatic: staticData,

         productIndex: productIndexData.map( (obj)=> { return {
            ...obj, //Extract the url for all Images>>
            image: urlFor(obj.image).width(400).url(), 
            author:  {...obj.author, pic: urlFor(obj.author.pic).width(30).url(), }
         }} ),
         
         blogIndex: blogIndexData.map( (obj)=> { return {
            ...obj, //Extract the url for all Images>>
            image: urlFor(obj.image).width(400).url(), 
            author:  {...obj.author, pic: urlFor(obj.author.pic).width(30).url(), },
            promotional: { contentDuration: obj.stats[0]+' mins'},
         }} ),

         productSlideshow: imgSlides.map( (obj)=> urlFor(obj.image).width(700).url(), ),
      }
   }
   
}


export default function Home({dataStatic, productIndex, productSlideshow, blogIndex, }) {
   const {head, points, } = dataStatic

   // console.log(blogIndex);

   return (
      <>
         <Hero data={head} slides={productSlideshow} /> <br />

         <Slider data={productIndex} label={{title:"discover our courses", link:"all courses", url:"/course"}}  url="/course" /> <br />

         <Feature data={points[0]} reverse/> <br />
         <Feature data={points[1]}/>  <br />

         <Email /> <br />

         <Faq data={dataStatic.product.frequent}/> <br />

         <Slider data={blogIndex} label={{title:"browse the latest blogs ", link:"read all blogs", url:"/blog"}}/> <br />

      </>
   )
}
