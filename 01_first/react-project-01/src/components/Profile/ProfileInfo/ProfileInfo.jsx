import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU'/>
            </div>
            <div className={classes.descriptionBlock}>
                Ava + desriptions
            </div>
        </div>
    )
}

export default ProfileInfo;