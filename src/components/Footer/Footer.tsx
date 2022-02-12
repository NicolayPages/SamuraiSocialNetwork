import React, { Component } from 'react';
import s from './Footer.module.scss'
export const Footer: React.FC = React.memo(() => {
  return (
    <footer className={s.Footer}>
      <div className={s.container}>
        <p className={s.Footer__copy}>©My Social App, 2022</p>
      </div>
    </footer>
  )
})


