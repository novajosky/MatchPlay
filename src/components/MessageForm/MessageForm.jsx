import React from 'react';
import { Card, Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Label from "react-bootstrap/Card";
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
        <Container>
            <Card className="text-center" border="success" style={{ width: '85vw' }}>
                <Form size="sm" autoComplete="off" onSubmit={handleSubmit}>
                    <Label>Title</Label>
                    <Form.Control size="sm"
                        value={formData.title} name="title"
                        onChange={e => handleChange(e)}
                        />
                    <Label>Content</Label>
                    <Form.Control size="sm"
                        value={formData.content} name="content"
                        onChange={e => handleChange(e)}
                        />
                    <Button size="sm" variant="success" type="submit">Add Post</Button>
                </Form>
            </Card>
        </Container>
    );
}
