import React from 'react';
import Post from './Post'
import { TransitionGroup, CSSTransition, } from 'react-transition-group';

const PostList = ({posts, title, remove}) => {
    
    if(!posts.length){
        return (
        <h1>Посты не найдены!</h1>
        )  
    }
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>{title}</h2>
            <TransitionGroup>
                {posts.map((post, index) =>
                  <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                <Post remove={remove} number={index + 1} posts={post}/>
                </CSSTransition>
                )}
            </TransitionGroup>
            
        </div>
    );
};

export default PostList;