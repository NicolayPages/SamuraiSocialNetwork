import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.scss';

type PropsType = {
   id: number
   name: string
}

export const Dialog: React.FC<PropsType> = React.memo((props) => {
   const { id, name } = props
   let path = "/dialogs/" + id;
   return (
      <li className={s.link}><NavLink to={path} activeClassName="selected" >{name}</NavLink></li>
   );
})
