import React, { useEffect, useState } from 'react'
import * as postsAPI from '../../utilities/posts-api'
import MessageForm from '../MessageForm/MessageForm'
import DisplayMessages from '../DisplayMessages/DisplayMessages'

export default function MessageBoard() {
    const [posts, setPosts] = useState([]);

    useEffect(function() {
        async function getPosts() {
            const posts = await postsAPI.getAll();
            setPosts(posts);
        }
        getPosts();
    }, []);
        console.log(posts)
    async function handleAddPost(postData) {
        console.log(postData)
        const post = await postsAPI.add(postData);
        console.log(post)
        setPosts([...posts, post]);
    }

    async function handleDelete(id) {
        console.log('hitting')
        const deletedPost = await postsAPI.deletePost(id)
        const updatedPosts = posts.filter(post => post._id !== deletedPost._id)
        setPosts (updatedPosts)
    }

    return (
        <main>
            <div></div>
            <MessageForm handleAddPost={handleAddPost}/>
            <DisplayMessages handleDelete={handleDelete} posts={posts} />
            <div></div>
        </main>
    )
}

