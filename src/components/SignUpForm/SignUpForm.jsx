import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import './SignUpForm.css'
import PhotoBoard from "../../components/PhotoBoard/PhotoBoard";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Form } from 'react-bootstrap';

export default class SignUpForm extends Component {
    state = {
        phtoto: '',
        name: '',
        email: '',
        password: '',
        confirm: '',
        age: '',
        citystate: '',
        handicap: '',
        gender: 'Male',
        pfgender: 'Men',
        playage: "I'm comfortable with any age group.",
        drinker: "Lets get drunk!",
        meticulous:"I play at a good pace.",
        etiquette: "Rules Are RULES!",
        skillset: "I can play with any skill type.",
        error: ''
    };

    handleChange = (evt) => {
      this.setState({
        [evt.target.name]: evt.target.value,
        error: ''
      });
    };
  
    handleSubmit = async (evt) => {
      evt.preventDefault();
      try {
        const formData = {...this.state};
        delete formData.confirm;
        delete formData.error;
        // The promise returned by the signUp service method
        // will resolve to the user object included in the 
        // payload of the JSON Web Token (JWT)
        const user = await signUp(formData);
        // Baby step 
        this.props.setUser(user);
      } catch {
        // An error happened on the server
        this.setState({ error: 'Sign Up Failed - Try Again' });
      }
    };

    //must override the render method
    //the render method is the equivalent to a function-based component
    //its job is to return the UI

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <Card border="secondary">
            <Form autoComplete="off" onSubmit={this.handleSubmit}>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="First and Last name" name="name" value={this.state.name} onChange={this.handleChange} required />
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Example: name@email.com" name="email" value={this.state.email} onChange={this.handleChange} required />
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
              <Form.Label>Confirm</Form.Label>
              <Form.Control type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Example: 33" name="age" value={this.state.age} onChange={this.handleChange} required />
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Example: Seattle, Washington" name="citystate" value={this.state.citystate} onChange={this.handleChange} required />
              <Form.Label>What is your Handicap?</Form.Label>
              <Form.Control type="number" placeholder="Try to estimate otherwise, enter 30" name="handicap" value={this.state.handicap} onChange={this.handleChange} required />
              <Form.Label>Gender</Form.Label>
              <Form.Select type="text" name="gender" value={this.state.gender} onChange={this.handleChange} required>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
              <Form.Label>Do you have a preferred gender you would like to play with?</Form.Label>
              <Form.Select type="text" name="pfgender" value={this.state.pfgender} onChange={this.handleChange} required>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Anyone">Anyone</option>
              </Form.Select>
              <Form.Label>Do you mind playing with people much older or younger than you?</Form.Label>
              <Form.Select type="text" name="playage" value={this.state.playage} onChange={this.handleChange} required>
                <option value="I would prefer to play with people in my age group.">I would prefer to play with people in my age group.</option>
                <option value="I'm comfortable with any age group.">I'm comfortable with any age group.</option>
              </Form.Select>
              <Form.Label>How do you feel about drinking on the course?</Form.Label>
              <Form.Select type="text" name="drinker" value={this.state.drinker} onChange={this.handleChange} required>
                <option value="I can drink a beer or two.">I can drink a beer or two.</option>
                <option value="I don't mind others drinking.">I don't mind others drinking.</option>
                <option value="No Alcohol Please.">No Alcohol Please.</option>
                <option value="Lets get drunk!">Lets get drunk!</option>
              </Form.Select>
              <Form.Label>Are you a meticulous player?</Form.Label>
              <Form.Select type="text" name="meticulous" value={this.state.meticulous} onChange={this.handleChange} required>
                <option value="I take my time in preparing for a shot.">I take my time in preparing for a shot.</option>
                <option value="I play fast. I don't like to wait.">I play fast. I don't like to wait.</option>
                <option value="I play at a good pace.">I play at a good pace.</option>
              </Form.Select>
              <Form.Label>Are you a stickler for eqiquette?</Form.Label>
              <Form.Select type="text" name="etiquette" value={this.state.etiquette} onChange={this.handleChange} required>
                <option value="Rules Are RULES!">Rules Are RULES!</option>
                <option value="I dont mind how others play.">I dont mind how others play.</option>
                <option value="I would like others to have some etiquette.">I would like others to have some etiquette.</option>
              </Form.Select>
              <Form.Label>How do you feel about playing with players who have a different skillset?</Form.Label>
              <Form.Select type="text" name="skillset" value={this.state.skillset} onChange={this.handleChange} required>
                <option value="I can play with any skill type.">I can play with any skill type.</option>
                <option value="I prefer to play with people within my handicap range.">I prefer to play with people within my handicap range.</option>
                <option value="I dont mind as long as there isnt a huge disparity in handicap.">I dont mind as long as there isnt a huge disparity in handicap. </option>
              </Form.Select>
              <Button variant="success" type="submit" disabled={disable}>SIGN UP</Button>
            </Form>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </Card>
        );
      }
}
