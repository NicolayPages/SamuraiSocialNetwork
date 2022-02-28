import React, { useEffect, useRef, useState } from 'react'
import { ChatMessageAPIType } from '../../api/chat-api'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../redux/chat-reducer'
import { AppStateType } from '../../redux/redux-store'
import s from './ChatPage.module.scss'
import userAva from '../../assets/images/user.png'
import { Link } from 'react-router-dom';



const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat />
        </div>
    )
}

const Chat: React.FC = () => {

    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return <>
        {status === 'error' && <div>Some error occured. Please refresh the page</div>}
        <div className={s.chat}>
            <h1 className={s.title}>Users chat</h1>
            <Messages />
            <AddMessageForm />
        </div>
    </>
}

const Messages: React.FC<{}> = ({ }) => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages])

    let messagesList = messages.map((m) => <Message key={m.id} message={m} />)
    return (
        <div onScroll={scrollHandler} className={s.messages}>
            {messagesList}
            <div ref={messagesAnchorRef}></div>
        </div>
    )

}


const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(({ message }) => {
    return (
        <div className={s.messageItem}>
            <div className={s.ava}>
                <Link to={'profile/' + message.userId}> <img src={message.photo ? message.photo : userAva} /></Link>
            </div>
            <div className={s.flex}>
                <h4 className={s.name}>{message.userName}</h4>
                <p className={s.message}>{message.message}</p>
            </div>
        </div >
    )
})


const AddMessageForm: React.FC<{}> = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)


    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }

    return (
        <div className={s.messageForm}>
            <textarea
                onChange={(e) => setMessage(e.currentTarget.value)}
                value={message}
                className={s.area}
                placeholder={'write message...'}
            ></textarea>
            <div><button disabled={status !== 'ready'} onClick={sendMessageHandler} className={s.btn}>send</button></div>
        </div>

    )
}

export default ChatPage
