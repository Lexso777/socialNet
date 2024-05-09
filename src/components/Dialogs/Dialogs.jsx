import React from 'react';
import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import { updateNewMessageTextActionsCreator, sendNewMessageActionsCreator } from '../../redux/dialog-reducer';



const DialogItem = (props) => {
    return (
        <div className={style.dialog}>
            <NavLink className={style.NavLink} to={`/dialogs/${props.id}`}>
                <img className={style.img} src={props.img} alt="#" />
                <span className={style.name}>{props.name}</span>
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.Messagetext}</div>
    )
}

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogElement = state.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />)

    let messageElement = state.messageData.map(messagetext => <Message Messagetext={messagetext.message} />)

    let currentMessageText = React.createRef();

    function sendMessage(){
        props.dispatch(sendNewMessageActionsCreator());
    }

    function updateMessageText(){
        let text = currentMessageText.current.value;
        props.dispatch(updateNewMessageTextActionsCreator(text))
        console.log(text);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElement}
            </div>
            <div className={style.messages}>
                <div className={style.dialogname}>
                </div>
                {messageElement}
                <div>
                    <textarea ref={currentMessageText} onChange={updateMessageText} value={props.store.getState().dialogsPage.newMessageText}></textarea>
                    <button onClick={sendMessage}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;