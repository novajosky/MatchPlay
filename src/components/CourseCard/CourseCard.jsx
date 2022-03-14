import React from 'react'
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import './CourseCard.css';

export default function DisplayCourses({ course, handleDelete }) {
    function deleteCourse(e, id) {
        e.preventDefault();
        handleDelete(id);
    }
    return (
        <Card border="success" style={{ width: '21rem' }}>
            <Card.Img variant="top" src="holder.js/120px120">{}</Card.Img>
            <Card.Body>
                <Card.Title>
                    {course.name}
                </Card.Title>
                <hr />
                <Card.Subtitle>
                    {course.address}
                </Card.Subtitle>
                <hr />
                <Card.Text>
                    {course.description}
                </Card.Text>
                <hr />
                <Button className='button' onClick={ e => deleteCourse(e, course._id)} type="submit">Delete</Button>
            </Card.Body>
        </Card>
    )
}