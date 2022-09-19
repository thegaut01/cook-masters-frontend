/* eslint-disable react-hooks/exhaustive-deps */

import Image from 'next/image'
import Link from 'next/link'

import Hero from '/components/hero'
import Email from '/components/email-opt-in'
import Faq from '/components/faq'
import Slider from '/components/slider'
import Feature from '/components/feature'

import About from './components/about'
import Samples from './components/samples'
import Cta from './components/cta'
import Sponsors from './components/sponsors'
import Sections from './components/sections'
import Upcoming from './components/upcoming'


import staticData from '/public/data-static.js'

import sanity from '/lib/sanity.js'
import imageUrlBuilder from '@sanity/image-url'

export async function getStaticPaths() {
   const query = ` *[_type == "product" ] { slug, } `
   const prodIndex = await sanity.fetch(query);

   return {
      paths: prodIndex.map( (obj)=> {return { params: { product: obj.slug.current } }} ),
      fallback: false,
   }
}
export async function getStaticProps(context) {

   const builder = imageUrlBuilder(sanity)
   function urlFor(source) {
      return builder.image(source)
   }
   
   const currentSlug = context.params.product
   const query = ` *[_type == "product" && slug.current == "${currentSlug}" ] {..., author->} `
   const productData = await sanity.fetch(query);

   const additionalProducts = ` *[_type == "product" ] { title, author->, image, stats, promotional{ contentDuration }, slug } `
   const indexData = await sanity.fetch(additionalProducts);
   
   return {
      props: {
         dataStatic: staticData,
         dataProduct: {
            ...productData[0], //Extract the url for all Images>>
            image: urlFor(productData[0].image).width(700).url(), 
            author: {...productData[0].author, pic: urlFor(productData[0].author.pic).width(50).url() },
            samples: productData[0].samples.map( (obj)=> {return {...obj, image: urlFor(obj.image).width(700).url() }} ),
            reviews: productData[0].reviews.map( (obj)=> {return {...obj, image: urlFor(obj.image).width(200).url(), avatar: urlFor(obj.avatar).width(30).url(),} } ),
         },

         
         productIndex: indexData.map( (obj)=> { return {
            ...obj, //Extract the url for all Images>>
            image: urlFor(obj.image).width(400).url(), 
            author:  {...obj.author, pic: urlFor(obj.author.pic).width(30).url(), }
         }} ),
      }
   }
}

export default function Home({ dataStatic, dataProduct, productIndex, }) {

   const { frequent, features, sponsors, } = dataStatic.product;

   const { 
      newRelease,
      comingSoon,
      title,
      header, 
      image,
      discription, 
      aboutProj, 
      aboutAuthor, 

      coupon,
      stats,
      author,
      info,
      promotional,
      reviews,
      samples,
   } = dataProduct;
   const hero = { header, image, discription, info, stats, heroVid:promotional.trailer, }
   const about = { author, aboutProj, aboutAuthor, promotional,}
   const { clip, clipThumb, clipDuration, clipDiscription } = promotional;

   // console.log(dataProduct);

   return (
      comingSoon ?
      <>
         <Upcoming data={{title,image}} />
      </> :
      <>
         <Hero data={hero} coupon={coupon} />  <br />

         <About data={about}/>

         <Sponsors data={sponsors}/> <br />

         <Feature data={{
           "title": "watch course \n sample clips",
           "text": clipDiscription,
           "video": [clip, clipThumb, clipDuration,],
         }} reverse /> <br />

         <Samples data={samples}/> <br />

         {/* <Sections data={sections}/> <br /> */}

         <Cta reviews={reviews} contentDuration={promotional.contentDuration} features={features} stats={stats} coupon={coupon} /> <br />   

         <Faq data={frequent}/> <br />

         <Email /> <br />
         
         <Slider data={productIndex} label={{
            title:"discover other courses", 
            link:"all courses", 
            url:"/course"
         }}  url="/design" /> <br />

      <br />

      </>
   )
}
