
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import '/styles/reset.css'
import '/styles/app.scss'
import '/styles/animations.scss'

import Bkg from '/components/layout/background'
import Nav from '/components/navbar'
import Footer from '/components/footer'
import Wrap from '/components/layout/wrap'
import Modal from '/components/layout/modal'

export default function MyApp({ Component, pageProps }) {

   const router = useRouter()
   
   NProgress.configure({ 
      easing: 'ease', 
      speed: 750,
      showSpinner: false,
   });
   useEffect(() => {
      const handleStart = (url) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
      }

      const handleStop = () => {
      NProgress.done()
      }

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleStop)
      router.events.on('routeChangeError', handleStop)

      return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
      }
   }, [router])

   return (
   <>
      <Bkg/>
      <Nav/>
      <Wrap>
         <SwitchTransition mode={'out-in'}>
         <CSSTransition
            key={router.pathname}
            addEndListener={(node, done) => {
               node.addEventListener("transitionend", done, false);
            }}
            classNames="pageanim"
         >
            <Component {...pageProps} />
         
         </CSSTransition>
         </SwitchTransition>
      </Wrap>
      <Footer/>
      <Modal/>
   </>
   
   ) 
}

