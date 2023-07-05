import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../components/hooks/useFetching';
import PostService from '../API/PostService';

const PostIdPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id]);

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Вы открыли страницу поста с ID  {post.id}</h1>

    
            {loading
                ? <h1>Loading...</h1>
                : <>
                    <h2 style={{ textAlign: 'center' }}>{post.title}</h2>
                    <p style={{ textAlign: 'center' }}>{post.body}</p>
                </>
            }
    
            
        </div>
    );
};

export default PostIdPage;