import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={style.post}>
                <img className={style.img} src="https://cs13.pikabu.ru/post_img/2023/10/28/2/1698456437194820220.jpg" alt="#" />
                <div className={style.text}>{props.message}</div>
            </div>
        </div>
    )
}

export default Post;