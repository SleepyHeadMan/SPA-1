import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


    let postsItem = props.posts.map(
        (post) => (<Post message={post.message} likesCounter={post.likesCounter}/>)
    );

    return (<div>
        <h3>My posts</h3>
        <div>
            <textarea></textarea>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={classes.posts}>
            {postsItem}
        </div>
    </div>)
}

export default MyPosts;