import React from 'react'
import { useState } from "react";
import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"

export default function ReviewForm({handleAddReview}) {
    const [formData, setFormData] = useState({
        rating: 1,
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
      <Card>
        <Form onSubmit={handleSubmit}>
            <label>Rating</label> &nbsp;
            <select value={formData.rating} name="rating"
              onChange={e => handleChange(e)}>
                <option value='5'>5</option>
                <option value='4'>4</option>
                <option value='3'>3</option>
                <option value='2'>2</option>
                <option value='1'>1</option>
            </select>
            <Form.Control
              value={formData.content} name="content"
              onChange={e => handleChange(e)}
              />
            <button type="submit">Add Review</button>
        </Form>
      </Card>
    </div>
  )
}
