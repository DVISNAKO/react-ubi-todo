import { useState, useMemo, useEffect } from 'react';
import './App.css';
import PostList from './components/post/PostList';
import PostForm from './components/form/PostForm';
import PostFilter from './components/postFilter/PostFilter';
import MyModal from './components/myModal/MyModal';
import { usePosts } from './components/hooks/usePosts';
import PostService from './API/PostService';


function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);
  const sortedAndSeachedPosts = usePosts(posts, filter.sort, filter.query);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    fetchPosts();
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false);
  }

async function fetchPosts(){
  setLoading(true);
  const posts = await PostService.getAll();
  setPosts(posts)
  setLoading(false);
}

const removePost = (remPost) => {
    setPosts(posts.filter(p => p.id !== remPost.id))
  }


  return (

    <div className="App">
      <button onClick={() => setModal(true)}>Создать задачу</button>
      <hr style={{ width: 300 }} />
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <hr style={{ width: 300 }} />
    {loading
      ? <h1>Loading...</h1>
      : <PostList remove={removePost} posts={sortedAndSeachedPosts} title={'Список постов'} /> 
    }
    </div>
  );
}

export default App;
