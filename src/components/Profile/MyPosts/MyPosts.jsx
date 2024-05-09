import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { addNewPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';



const MyPosts = (props) => {
    // let postElement = props.postData.map(post => <Post message={post.message}/>)
    let postElement = props.profilePage.postData.map(post => <Post message={post.message}/>)

    let currentText = React.createRef();

    function addPost (){
        props.dispatch(addNewPostActionCreator());
    }

    function onPostChange (){
        let text = currentText.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    }

    return (
            <div>
                <div className={style.myposts}>
                    MyPosts:
                </div>
                <div><textarea ref={currentText} onChange={onPostChange} value={props.newPostText}/></div>
                <button onClick={addPost}>addpost</button>
                {postElement}   
            </div>
    )
}

export default MyPosts;