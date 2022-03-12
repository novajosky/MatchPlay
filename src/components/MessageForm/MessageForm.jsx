import React from 'react'
import { useState } from "react";

export default function MessageForm({handleAddPost}) {
    const [title, setTitle] = useState([]);
    const [images, setImages] = useState([]);
    const [content, setContent] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        handleAddPost(content);
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label>Add Photo</label>
                <input 
                    value={images}
                    onChange={e => setImages(e.target.value)} 
                    type="file" accept="image/*"></input>
                <label>Title</label>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />
                <label>Content</label>
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    />
                <button type="submit">Add Post</button>
            </form>
            <div>
            </div>
        </main>
    );
}
