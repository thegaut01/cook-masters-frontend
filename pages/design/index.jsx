
import Link from 'next/link'

import styles from './index.module.scss'

import Email from '/components/email-opt-in'
import Faq from '/components/faq'
import Hero from '/components/hero'
import Feature from '/components/feature'

import Modal from '/components/layout/modal'
import Rating from '/components/sub-components/rating'

import pageData from '/public/data-static'
export async function getStaticProps(context) {

    return {
        props: {
            faqData: pageData.product.frequent,
        }
    }
}

export default function Design({faqData, }) {

   return (
      <>
         <div className={styles.page}>
            <div>
               <span>Typography</span> <hr />
               <h1>design system</h1>
               <h2>organic scenester aliquip</h2>
               <h3>voluptas saepe perspiciatis temporibus</h3>
               <h4>voluptas saepe perspiciatis temporibus</h4>
               {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consequuntur delectus recusandae ullam sed. Nostrum iste quasi vero cum ratione!</p> <hr /> */}

               <p>Dolor esse fugit, Eveniet a vel animi dignissimos sint architecto quae inventore aliquid. Dolorem provident autem dicta! Hic quo beatae ipsum sapiente amet natus, molestiae rem similique, reiciendis, ratione suscipit eligendi qui aperiam eveniet et? Neque veritatis cupiditate autem incidunt, aut similique accusantium dolorem consequuntur ipsam minima enim hic quidem nisi sapiente molestiae, modi omnis debitis excepturi. Ad ullam inventore quis, fuga molestiae debitis quas recusandae earum omnis mollitia corporis? Cupiditate dolor provident voluptas saepe perspiciatis temporibus. Deserunt molestias, unde eveniet odio hic enim corporis vel odit a laborum quasi facilis tenetur, excepturi esse ea eligendi sed possimus temporibus eum ullam iste doloribus accusantium! Illo quos commodi aspernatur, cum numquam ratione eaque? Tempore, sapiente reprehenderit aut iste eveniet eum expedita similique voluptate nulla vitae excepturi ipsa aperiam, voluptatem, fugit dolores saepe aliquam officiis! Recusandae debitis corporis ab quibusdam, mollitia quod ex doloremque quae quos inventore molestias, ullam eaque sit doloribus officia tenetur aliquam illum pariatur non perspiciatis a ipsum tempore.</p>
            </div>
            
            <div>
               <br /> <span>Colors</span> <hr />
               <div className={styles.colors}><span></span><span></span><span></span><span></span></div>
            </div>

            <div>
               <br /> <span>Components</span> <hr />
               
               <Faq data={faqData}/>

               <Email /> 

            </div>

         </div> 

      </>
   )
}
