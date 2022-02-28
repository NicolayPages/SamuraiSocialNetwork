import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DialogsType, getAllMessages, MessagesType, startNewChat } from '../../redux/dialogs-reducer';
import { getDialogs, getIsFetching, getMessages } from '../../selectors/dialogs-selectors';
import Preloader from '../common/Preloader/Preloader';
import { Dialog } from './Dialog/Dialog';
import s from './Dialogs.module.scss';
import { Message } from './Message/Message';
import { MessageForm } from './MessageForm/MessageFormContainer';



type PropsType = {
   dialogs: Array<DialogsType>
   messages: Array<MessagesType>
}



const DialogsContainer: React.FC = React.memo(() => {
   const dialogs = useSelector(getDialogs)
   const messages = useSelector(getMessages)
   const isFetching = useSelector(getIsFetching)

   let dispatch = useDispatch()
   let userId = 2

   useEffect(() => {
      dispatch(startNewChat(userId))
      dispatch(getAllMessages(userId))
   }, []);

   if (isFetching) {
      return <Preloader />
   }

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




export default DialogsContainer


