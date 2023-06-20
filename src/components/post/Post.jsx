import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className='post'>
            <div className="post__content">
                <h2 className='title'>{props.posts.title}</h2>
                <div className='disc'>
                    {props.posts.body}
                </div>
                <button className='btn'>delete</button>
            </div>
        </div>
    );
};

export default Post;