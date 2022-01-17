import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.scss'

const Dialog = (props) => {
   let path = "/dialogs/" + props.id;
   return (
      <li className={s.link}><NavLink to={path} activeClassName="selected" >{props.name}</NavLink></li>
   );
}

export default Dialog;