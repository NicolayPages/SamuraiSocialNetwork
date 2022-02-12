import React from 'react';
import { useSelector } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { DialogsType, MessagesType } from '../../redux/dialogs-reducer';
import { getDialogs, getMessages } from '../../selectors/dialogs-selectors';
import { Dialog } from './Dialog/Dialog';
import s from './Dialogs.module.scss'
import { Message } from './Message/Message';
import { MessageForm } from './MessageForm/MessageFormContainer';



type PropsType = {
   dialogs: Array<DialogsType>
   messages: Array<MessagesType>
}



const DialogsContainer: React.FC = React.memo(() => {
   const dialogs = useSelector(getDialogs)
   const messages = useSelector(getMessages)

   return (
      <Dialogs
         dialogs={dialogs}
         messages={messages}
      />
   )
})


const Dialogs: React.FC<PropsType> = React.memo((props) => {
   const { dialogs, messages } = props

   let dialogElements = dialogs.map((d: DialogsType) =>
      <Dialog key={d.id} name={d.name} id={d.id} />);

   let messageElements = messages.map((m: MessagesType) =>
      <Message key={m.id} name={m.name} message={m.message} />);

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
            <MessageForm />
         </div>
      </div>
   );
})




export default compose<React.ComponentType>(
   withAuthRedirect,
)(DialogsContainer);


