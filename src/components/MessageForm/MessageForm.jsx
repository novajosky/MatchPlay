import React from 'react'
import { useState } from "react";

export default function MessageForm({handleAddPost}) {
    const [formData, setFormData] = useState({
        // photo: '',
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
                <input 
                    value={formData.photo} name="photo"
                    onChange={e => handleChange(e)} 
                    type="file" accept="image/*"></input>
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
