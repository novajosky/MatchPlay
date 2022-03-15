import React from 'react';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";

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
        <Card>
            <Form onSubmit={handleSubmit}>
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
                <Button variant="success" type="submit">Add Post</Button>
            </Form>
            <div>
            </div>
        </Card>
    );
}
