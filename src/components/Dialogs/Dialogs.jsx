import React, { Component } from 'react';
import s from './Dialogs.module.scss'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import MessageFormComponent from './MessageForm/MessageFormContainer';

const Dialogs = (props) => {
   let dialogElements = props.dialogs.map(d => <Dialog name={d.name} id={d.id} />);
   let messageElements = props.messages.map(m => <Message name={m.name} id={m.id} message={m.message} />);
   return (
      <div className={s.dialogs}>
         <ul className={s.items}>
            <h2 className={s.title}>Dialogs</h2>
            {dialogElements}
         </ul>
         <div className={s.wrapper}>
            <div className={s.messages}>
               {messageElements}
            </div>
            <MessageFormComponent />
         </div>
      </div>
   );
};
export default Dialogs;
