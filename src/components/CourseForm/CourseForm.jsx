import React from 'react'
import { useState } from "react";
import PhotoBoard from "../../components/PhotoBoard/PhotoBoard"

export default function CourseForm({handleAddCourse}) {
    const [formData, setFormData] = useState({
        photo: '',
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
                <PhotoBoard />
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
