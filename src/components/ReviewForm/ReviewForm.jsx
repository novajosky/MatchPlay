import React from 'react'
import { useState } from "react";

export default function ReviewForm({handleAddReview}) {
    const [formData, setFormData] = useState({
        rating: ['5', '4', '3', '2', '1'],
        content: ''
    })

    function handleChange(evt) {
        setFormData({...formData, [evt.target.name]: evt.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleAddReview(formData);
    }

  return (
    <div>
        <form>
            <select value={formData.rating} name="rating"
              onChange={e => handleChange(e)}>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
            <textarea
              value={formData.content} name="content"
              onChange={e => handleChange(e)}
            />
            <button type="submit">Add Review</button>
        </form>
    </div>
  )
}
