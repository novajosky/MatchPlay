import React from 'react'
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";

export default function DisplayCourses({ course, handleDelete }) {
    function deleteCourse(e, id) {
        e.preventDefault();
        handleDelete(id);
    }
    return (
        <Card className="text-center" border="success" style={{ width: '85vw' }}>
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