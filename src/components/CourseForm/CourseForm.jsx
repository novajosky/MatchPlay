import React from 'react'
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Label from "react-bootstrap/Card"


export default function CourseForm({handleAddCourse}) {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        description: '',
    })

    function handleChange(evt) {
        setFormData({...formData, [evt.target.name]: evt.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleAddCourse(formData);
    }


    return (
        <Card className="text-center" border="success" style={{ width: '85vw' }}>
            <Form onSubmit={handleSubmit}>
                <Label>Name</Label>
                <Form.Control
                    value={formData.name} name="name"
                    onChange={e => handleChange(e)}
                    />
                <Label>Address</Label>
                <Form.Control
                    value={formData.address} name="address"
                    onChange={e => handleChange(e)}
                    />
                <Label>Description</Label>
                <Form.Control
                    value={formData.description} name="description"
                    onChange={e => handleChange(e)}
                    />
                <Button variant="success" size="sm" type="submit">Add Course</Button>
            </Form>
        </Card>
    );
}
