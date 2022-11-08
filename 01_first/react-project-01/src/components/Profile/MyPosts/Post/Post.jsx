import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://play-lh.googleusercontent.com/0jXqZFuAVPRWjju3rgFUIkfbLaXZ7DpjcYaRVJIt1Z9MtwI4CQubERdt3HatlP6MVks' />
            {props.message}
            <div>
                <span>{props.likesCounter} like</span>
            </div>
        </div>
    )
}

export default Post;