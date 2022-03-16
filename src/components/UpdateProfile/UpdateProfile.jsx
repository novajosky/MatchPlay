import React from 'react';
import { useState } from "react";
import { signUp } from '../../utilities/users-service';
import Button from "react-bootstrap/Button";
import { Form } from 'react-bootstrap';
import * as usersAPI from "../../utilities/users-api"

export default function UpdateProfile({ user }) {
    const [formData, setFormData] = useState({
        name:''
    })

    function handleChange(evt) {
        setFormData({...formData, [evt.target.name]: evt.target.value});
    }

    function handleUpdate(e) {
        e.preventDefault();
        updatedUser = usersAPI.handleUpdate(formData, editData._id)
        handleUpdateProfile(updatedUser);
    }
    useEffect(() => {
        if (editData) {
          const getExistingData = () =>
            setFormData({
              name: editData.name,

            });
          getExistingData();
          setActivities(formData.activities);
        }
      }, []);

    return (
        <main>
          <Form className="stats">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                required
                label="Trip Destination"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                name="name"
                placeholder="">

              </Form.Control>
              <Button variant="success" type="submit">Update Profile</Button>
          </Form>
      </main>
    )
}

