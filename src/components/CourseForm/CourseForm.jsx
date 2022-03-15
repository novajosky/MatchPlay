import React from 'react'
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


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
        <Card border="success">
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    value={formData.name} name="name"
                    onChange={e => handleChange(e)}
                    />
                <br/>
                <label>Address</label>
                <textarea
                    value={formData.address} name="address"
                    onChange={e => handleChange(e)}
                    />
                <label>Description</label>
                <textarea
                    value={formData.description} name="description"
                    onChange={e => handleChange(e)}
                    />
                <Button variant="success" size="sm" type="submit">Add Course</Button>
            </form>
        </Card>
    );
}
