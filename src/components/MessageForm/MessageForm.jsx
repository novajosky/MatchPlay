import React from 'react'
import { useState } from "react";
import PhotoBoard from "../PhotoBoard/PhotoBoard"

export default function MessageForm({handleAddPost}) {
    const [formData, setFormData] = useState({
        photo: '',
        title: '',
        content: ''
    })

    function handleChange(evt) {
        setFormData({...formData, [evt.target.name]: evt.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleAddPost(formData);
    }


    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label>Add Photo</label>
                <PhotoBoard />
                <label>Title</label>
                <input
                    value={formData.title} name="title"
                    onChange={e => handleChange(e)}
                    />
                <label>Content</label>
                <textarea
                    value={formData.content} name="content"
                    onChange={e => handleChange(e)}
                    />
                <button type="submit">Add Post</button>
            </form>
            <div>
            </div>
        </main>
    );
}
