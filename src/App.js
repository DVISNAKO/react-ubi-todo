import { useState } from 'react';
import './App.css';
import PostList from './components/post/PostList';
import MyInput from './components/UAI/input/MyInput';
import PostForm from './components/form/PostForm';



function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Java', body: 'descrip' },
    { id: 2, title: 'Ruby', body: 'descrip' },
    { id: 3, title: 'React', body: 'descrip' }
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (

    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title={'Список постов'} />
    </div>
  );
}

export default App;
