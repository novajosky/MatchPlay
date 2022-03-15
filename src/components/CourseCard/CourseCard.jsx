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
        <Card bclasssName="text-center" border="success" style={{ width: '85vw' }}>
            <Card.Img variant="top" src="holder.js/120px120">{}</Card.Img>
            <Card.Body>
                <Card.Title>
                    {course.name}
                </Card.Title>
                <Card.Text>
                    {course.address}
                </Card.Text>
                <Card.Text>
                    {course.description}
                </Card.Text>
                <Button className='button' variant="success" onClick={ e => deleteCourse(e, course._id)} type="submit">Delete</Button>
            </Card.Body>
        </Card>
    )
}