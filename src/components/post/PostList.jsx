import React from 'react';
import Post from './Post'

const PostList = ({posts, title}) => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>{title}</h2>
            {posts.map((post, index) =>
                <Post number={index + 1} posts={post} key={post.id}/>)}
        </div>
    );
};

export default PostList;