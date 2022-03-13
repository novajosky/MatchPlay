import React from 'react'
import {Card, Row, Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
import './CourseCard.css';

export default function DisplayCourses({ course, handleDelete }) {
    function deleteCourse(e, id) {
        e.preventDefault();
        handleDelete(id);
    }
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="holder.js/120px120">{}</Card.Img>
                    <Card.Body>
                        {course.name}
                        <hr />
                        {course.address}
                        <hr />
                        {course.description}
                        <hr />
                        <Button className='button' onClick={ e => deleteCourse(e, course._id)} type="submit">Delete</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}