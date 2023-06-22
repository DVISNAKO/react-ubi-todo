import { useState, useMemo } from 'react';
import './App.css';
import PostList from './components/post/PostList';
import MyInput from './components/UAI/input/MyInput';
import PostForm from './components/form/PostForm';
import MySelect from './components/UAI/select/MySelect';


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Java', body: 'descrip1' },
    { id: 2, title: 'Ruby', body: 'descrip2' },
    { id: 3, title: 'React', body: 'descrip3' }
  ])

  const [selectedSort, setSelectedSort] = useState('');
  const [search, setSearch] = useState('');

  const sortedPost = useMemo(() => {
    console.log("отработала")
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    } return posts;
  }, [selectedSort, posts])

  const sortedAndSeachedPosts = useMemo( () => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(search))
  }, [search, sortedPost])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (remPost) => {
    setPosts(posts.filter(p => p.id !== remPost.id))
  }

  const sortPost = (sort) => {
    setSelectedSort(sort);
  }

  return (

    <div className="App">
      <PostForm create={createPost}
      />
      <hr style={{ width: 300 }} />

      <MyInput
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Поиск.." />

      <MySelect
        value={selectedSort}
        onChange={sortPost}
        defaultvalue="Сортировка по"
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      ></MySelect>

      <hr style={{ width: 300 }} />
      {sortedAndSeachedPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSeachedPosts} title={'Список постов'} />
        : <h2>Посты не были найдены</h2>
      }

    </div>
  );
}

export default App;
