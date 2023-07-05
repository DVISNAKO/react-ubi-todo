import React from 'react';
import './Post.css';
import { useNavigate } from 'react-router-dom';

const Post = (props) => {
    const navigate = useNavigate();
   
    return (
        <div className='post'>
            <div className="post__content">
                <h2 className='title'>{props.posts.id}. {props.posts.title}</h2>
                <div className='disc'>
                    {props.posts.body}
                </div>
                <button onClick={() => navigate(`/posts/${props.posts.id}`)} 
                className='btn'>open</button>

                <button onClick={() => props.remove(props.posts)} 
                className='btn'>delete</button>
            </div>
        </div>
    );
};

export default Post;