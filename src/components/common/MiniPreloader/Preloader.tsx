import React from 'react';
import s from './Preloader.module.scss'


const MiniPreloader: React.FC = React.memo(() => {
   return (
      <div className={s.wrapper}>
         <div className={s.ldsDualRing}></div>
      </div>
   );
})

export default MiniPreloader;