import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { FilterTypes } from '../../../redux/users-reducer';
import s from './Search.module.scss';


type PropsType = {
   onFilterChanged: (filter: FilterTypes) => void
}


export const Search: React.FC<{} & PropsType> = React.memo((props) => {

   const initialValues: any = { term: '', friend: '' };

   let onSubmit = (values: any) => {
      props.onFilterChanged(values)
   }

   return (
      <div className={s.wrapper}>
         <Formik initialValues={initialValues} onSubmit={onSubmit} >
            <Form className={s.form}>
               <Field className={s.input} name="term" placeholder="find users..." />
               <Field className={s.select} name="friend" as="select">
                  <option value="null">All users</option>
                  <option value="true">Only followed</option>
                  <option value="false">Only unfollowed</option>
               </Field>
               <button>Find</button>
            </Form>
         </Formik>
      </div>
   );
})

