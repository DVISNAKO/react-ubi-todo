import { useState, useMemo, useEffect } from 'react';
import './App.css';
import PostList from './components/post/PostList';
import PostForm from './components/form/PostForm';
import PostFilter from './components/postFilter/PostFilter';
import MyModal from './components/myModal/MyModal';
import { usePosts } from './components/hooks/usePosts';
import PostService from './API/PostService';
import { getPageCount, getPagesArray } from './utils/pages';
import { useFetching } from './components/hooks/useFetching';


function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);
  const sortedAndSeachedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPage, setTotaltotalPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  let pagesArray = getPagesArray(totalPage)


  const [fetchPosts, isLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotaltotalPage(getPageCount(totalCount, limit));
  })

  useEffect(() => {
    fetchPosts();
  }, [])

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
        <PostForm create={createPost} />
      </MyModal>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <hr style={{ width: 300 }} />
      {postError &&
        <h1>Произошла ошибка</h1>}
      {isLoading
        ? <h1>Loading...</h1>
        : <PostList remove={removePost} posts={sortedAndSeachedPosts} title={'Список постов'} />
      }
      <div>{pagesArray.map(p =>
        <button>{p}</button>)}
      </div>

    </div>
  );
}

export default App;
