import { useMemo } from "react";

export const useSortPosts = (posts, sort) => {

    const sortedPost = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        } return posts;
    }, [sort, posts])

    return sortedPost;
}

export const usePosts = (posts, sort, query) => {
    const sortedPost = useSortPosts( posts, sort);
    const sortedAndSeachedPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPost])

    return sortedAndSeachedPosts;

}