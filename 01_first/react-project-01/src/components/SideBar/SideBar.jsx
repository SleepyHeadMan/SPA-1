import classes from './SideBar.module.css';
import SideBarItem from "./SideBarItem/SideBarItem";


const SideBar = (props) => {

    let friends = props.state.friend.map(
        (ava) => (<SideBarItem avatar={ava.avatar}/>)
    )


    return (
        <div className={classes.side}>
            <h2>Friends</h2>
            <div className={classes.friend}>
                {friends}
            </div>

        </div>
    )
}

export default SideBar;