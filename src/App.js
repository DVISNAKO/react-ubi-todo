import { useState } from 'react';
import './App.css';
import PostList from './components/post/PostList';



function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'descrip'},
    {id: 2, title: 'Ruby', body: 'descrip'},
    {id: 3, title: 'React', body: 'descrip'}
  ])

  return (
    <div className="App">
     <PostList posts={posts} title={'Список постов'}/>
    </div>
  );
}

export default App;
