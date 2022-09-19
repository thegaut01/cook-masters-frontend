
import styles from './index.module.scss'

import Image from "next/image";
import Link from "next/link";

import ArrowSVG from "/public/icon/arrow.svg";

import sanity from '/lib/sanity.js'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'

export async function getStaticPaths() {
   const query = ` *[_type == "blog" ] { slug, } `
   const blogIndex = await sanity.fetch(query);

   return {
      paths: blogIndex.map( (obj)=> {return { params: { article: obj.slug.current } }} ),
      fallback: false,
   }
}
export async function getStaticProps(context) {

   const builder = imageUrlBuilder(sanity)
   function urlFor(source) {
      return builder.image(source)
   }
   
   const currentSlug = context.params.article
   const query = ` *[_type == "blog" && slug.current == "${currentSlug}" ] {..., author->}`
   const blogData = await sanity.fetch(query);
   
   return {
      props: {

         data: {
            ...blogData[0], //Extract the url for all Images>>
            image: urlFor(blogData[0].image).height(700).url(), 
            author: {...blogData[0].author, pic: urlFor(blogData[0].author.pic).width(50).url() },
         },
         
      }
   }
}


export default function comp({data}) {

   console.log(data);

   return (
      <div className={styles.article}>
         <h1>{data.title}</h1>
         <p>{data.discription}</p>
         <div className={styles.img}> <Image src={data.image} layout='fill' objectFit='cover' alt={"blog image" }/> </div>
         <article>
            <PortableText value={data.body} />
         </article>

         <Link href='/blog'> 
            <a className={styles.more}>
               <span><ArrowSVG/></span>
               <strong>more articles</strong>
            </a> 
         </Link>

      </div>
   )
}
