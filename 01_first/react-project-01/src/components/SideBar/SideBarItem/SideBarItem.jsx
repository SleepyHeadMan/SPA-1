import classes from './SideBarItem.module.css';

const SideBarItem = (props) => {

    return (
        <div className={classes.sideBarItem}>
           <img src={props.avatar} />
        </div>
    )
}

export default SideBarItem;