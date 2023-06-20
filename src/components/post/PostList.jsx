import React from 'react';
import Post from './Post'

const PostList = ({posts, title}) => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>{title}</h2>
            {posts.map(post =>
                <Post posts={post} key={post.id}/>)}
        </div>
    );
};

export default PostList;