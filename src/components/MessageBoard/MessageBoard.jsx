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

    async function handleAddPost(postData) {
        const post = await postsAPI.add(postData);
        setPosts([...posts, post]);
    }
    return (
        <main>
            <div></div>
            <MessageForm />
            <DisplayMessages />
            <div></div>
        </main>
    )
}

