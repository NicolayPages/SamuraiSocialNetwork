import React from 'react';
import s from './FormElements.module.scss'


type PropsType = {
   input: any
   meta: any
}

export const Textarea: React.FC<PropsType> = React.memo(({ input, meta, ...props }) => {
   const hasError = meta.touched && meta.error;
   return (
      <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
         <div><textarea {...input} {...props} /></div>
         {hasError && <span className={s.span}>{meta.error}</span>}
      </div>
   );
})

export const Input: React.FC<PropsType> = React.memo(({ input, meta, ...props }) => {
   const hasError = meta.touched && meta.error;
   return (
      <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
         <div><input {...input} {...props} /></div>
         {hasError && <span className={s.spanInput}>{meta.error}</span>}
      </div>
   );
})

