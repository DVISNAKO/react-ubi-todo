import { useState, useMemo } from 'react';
import './App.css';
import PostList from './components/post/PostList';
import PostForm from './components/form/PostForm';
import PostFilter from './components/postFilter/PostFilter';
import MyModal from './components/myModal/MyModal';


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Java', body: 'descrip1' },
    { id: 2, title: 'Ruby', body: 'descrip2' },
    { id: 3, title: 'React', body: 'descrip3' }
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);

  const sortedPost = useMemo(() => {
    console.log("отработала")
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    } return posts;
  }, [filter.sort, posts])

  const sortedAndSeachedPosts = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPost])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false);
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

      <PostList remove={removePost} posts={sortedAndSeachedPosts} title={'Список постов'} />


    </div>
  );
}

export default App;
