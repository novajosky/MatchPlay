import React from 'react'
import { useState } from "react";

export default function CourseForm({handleAddCourse}) {
    const [formData, setFormData] = useState({
        // photo: '',
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
        <main>
            <form onSubmit={handleSubmit}>
                <label>Add Photo</label>
                <input 
                    value={formData.photo} name="photo"
                    onChange={e => handleChange(e)} 
                    type="file" accept="image/*"></input>
                <label>Name</label>
                <input
                    value={formData.name} name="name"
                    onChange={e => handleChange(e)}
                    />
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
                <button type="submit">Add Course</button>
            </form>
            <div>
            </div>
        </main>
    );
}
