import React, { Component } from 'react';
import s from './Footer.module.scss'
const Footer = () => {
  return (
    <footer className={s.Footer}>
      <div className={s.container}>
        <p className={s.Footer__copy}>©My Social App, 2021</p>
      </div>
    </footer>
  );
}

export default Footer;
