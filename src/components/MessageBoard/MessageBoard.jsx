import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import * as postsAPI from '../../utilities/posts-api';
import MessageForm from '../MessageForm/MessageForm';
import DisplayMessages from '../DisplayMessages/DisplayMessages';

export default function MessageBoard({ user }) {
    const [posts, setPosts] = useState([]);
    const { id } = useParams();
    const [showButton, setShowButton] = useState(null);

    useEffect(function() {
        async function getPosts() {
            const posts = await postsAPI.getAll();
            setPosts(posts);
        }
        getPosts();
    }, []);
    async function handleAddPost(postData) {
        const post = await postsAPI.add(postData);
        setPosts([...posts, post]);
    }

    async function handleDelete(id) {
        const deletedPost = await postsAPI.deletePost(id)
        const updatedPosts = posts.filter(post => post._id !== deletedPost._id)
        setPosts (updatedPosts)
    }

    return (
        <main>
            <div></div>
            <MessageForm handleAddPost={handleAddPost}/>
            <DisplayMessages activeUser={user} showButton={showButton} setShowButton={setShowButton} id={id} handleDelete={handleDelete} posts={posts} />
            <div></div>
        </main>
    )
}

