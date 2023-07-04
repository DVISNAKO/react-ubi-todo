import React, { useEffect, useState } from 'react';
import MyModal from '../components/myModal/MyModal';
import PostFilter from '../components/postFilter/PostFilter';
import Pagination from '../components/UAI/pagination/Pagination';
import PostList from '../components/post/PostList';
import { usePosts } from '../components/hooks/usePosts';
import PostService from '../API/PostService';
import { useFetching } from '../components/hooks/useFetching';
import { getPageCount } from '../utils/pages';
import PostForm from '../components/form/PostForm';



function Posts() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);
  const sortedAndSeachedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotaltotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotaltotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
    fetchPosts();
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false);
  }

  const removePost = (remPost) => {
    setPosts(posts.filter(p => p.id !== remPost.id))
  }

  const changePage = (page) => {
    setPage(page)

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
    <Pagination
    page={page}
    changePage={changePage}
    totalPages={totalPages}
    />

    </div>
  );
}

export default Posts;
