import classes from './../Dialogs.module.css';


const Messages = (props) => {
    return (
        <div className={classes.messageItem}>{props.message}</div>
    )
}

export default Messages;