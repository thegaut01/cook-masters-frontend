
import styles from './index.module.scss'

import Banner from "/components/banner";

import pageData from '/public/data-static'

export async function getStaticProps(context) {

   return {
      props: {
         data: pageData.contact,
      }
   }
}

export default function comp({data}) {

      const {head, items} = data;

      return (
      <>
         <Banner data={head} >
            <div>
               <h4>contact</h4>
               <div><strong>{items.email}</strong></div>
               <div>{items.phone[0]}</div>
               <spdiv>{items.phone[1]}</spdiv>
            </div>

            <div>
               <h4>visits</h4>
               <div><strong>{items.address}</strong></div>
               <div>{items.open_days[0]} — {items.open_days[1]}</div>
               <div>{items.open_hours[0]} — {items.open_hours[1]}</div>
            </div>
         </Banner> <br /> 
      </>
      )
}
