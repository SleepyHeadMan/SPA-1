import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogsItems/DialogsItems";
import Messages from "./MessageItems/MessageItems";



const Dialogs = (props) => {

    let dialogsItems = props.state.dialogs.map(
        (dialogs) => (<DialogItem name={dialogs.name} id={dialogs.id} />)
    );
    let messagesItems = props.state.messages.map (
        (phrase) => (<Messages message={phrase.message}/>)
    )



    return (
        <div className={classes.mainDialogs}>
            <div className={classes.dialogs}>
                {dialogsItems}
            </div>
            <div className={classes.messages}>
                {messagesItems}
            </div>
        </div>
    );
}

export default Dialogs;