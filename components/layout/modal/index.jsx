
import styles from "./index.module.scss"

import Link from "next/link";

import useModalState from "/context/modalState.js";
import { CSSTransition } from 'react-transition-group';

import CrossSVG from "/public/icon/cross.svg";

function Menu() {

   const links = [
      { label:'home', url:"/" },
      { label:'courses', url:"/course" },
      { label:'blog', url:"/blog" },
      { label:'about', url:"/about" },
      { label:'contact', url:"/contact" },
      { label:'legal', url:"/legal" },
   ];
   return (
      <div className={styles.menu}>
         {links.map( (D,i) => <div key={"menu_link"+i} className={styles.link}>
            <div className={styles.entry}>
               <Link href={D.url} >
                  <a>
                  <span className={styles.index}>{i<9?'0':null}{i+1}</span> 
                  <span className={styles.label}>{D.label}</span>   
                  </a>
               </Link>  
            </div>
         </div>)}
      </div>
   )
}

function Vid({source}) {
   return (
      <div className={styles.vid}>
      <div className={styles.vidwrapper}>
         <video src={source} controls autoPlay playsInline />
      </div>
      </div>
   )
}

export default function Comp() {

   const modalOpen = useModalState( (S)=> S.modalState.open );
   const modalType = useModalState( (S)=> S.modalState.type );
   const modalLink = useModalState( (S)=> S.modalState.link );

   const toggleModalState = useModalState( (S)=> S.toggle );

   const closeModal = (e)=> { if( e.target.className.includes("modal") ) toggleModalState('nil'); };

   return (
      <>
      <CSSTransition in={modalOpen} timeout={500} classNames={"modalanim"} unmountOnExit>
         <div className={styles.modal} onClick={ closeModal } >
            <div className={styles.container}>

               { modalType==='menu' && <Menu/> }

               { (modalType==='vid') && <Vid source={modalLink} /> }

            </div>

            <span className={styles.tip}><CrossSVG/> tap outside to close</span>
         </div>
      </CSSTransition>
      </>
   )

}
