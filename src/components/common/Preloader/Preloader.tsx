import React from "react";
import s from './Preloader.module.scss'
import preloader from '../../../assets/images/preloader.gif'

const Preloader = () => {
   return (
      <div className={s.preloaderWrapper}>
         <img src={preloader} alt="" className={s.preloader} />
      </div>
   );
}
export default Preloader;