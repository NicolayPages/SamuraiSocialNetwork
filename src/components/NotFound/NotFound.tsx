import React from 'react';
import s from './NotFound.module.scss'
import dogIcon from '../../assets/images/corgi.png'
import { Link } from 'react-router-dom';
import ErrorPopup from '../common/ErrorPopup/ErrorPopup';


const NotFound: React.FC = React.memo(() => {
   return (
      <div className={s.wrapper}>
         <h1 className={s.title}>
            Oops, this page  not found,<br />
            please click on button to come back. <br />
            P.S it`s under the dog
         </h1>
         <div className={s.image}><img src={dogIcon} /></div>
         <div className={s.link}><Link to='/'>Come back</Link></div>
         <ErrorPopup />
      </div>
   );
})

export default NotFound