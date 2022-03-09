import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import './SignUpForm.css'

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        age: '',
        citystate: '',
        handicap: '',
        gender: 'male',
        pfgender: 'men',
        playage: 'anyage',
        drinker: 'drunk',
        meticulous:'fastplayer',
        etiquette: 'stickler',
        skillset: 'anylevel',
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
          <div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" placeholder="First and Last name" name="name" value={this.state.name} onChange={this.handleChange} required />
                <label>Email</label>
                <input type="email" placeholder="Example: name@email.com" name="email" value={this.state.email} onChange={this.handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <label>Confirm</label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                <label>Age</label>
                <input type="number" placeholder="Example: 33" name="age" value={this.state.age} onChange={this.handleChange} required />
                <label>Location</label>
                <input type="text" placeholder="Example: Seattle, Washington" name="citystate" value={this.state.citystate} onChange={this.handleChange} required />
                <label>What is your Handicap?</label>
                <input type="number" placeholder="Try to estimate otherwise, enter 30" name="handicap" value={this.state.handicap} onChange={this.handleChange} required />
                <label>Gender</label>
                <select type="text" name="gender" value={this.state.gender} onChange={this.handleChange} required>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="other">other</option>
                </select>
                <label>Do you have a preferred gender you would like to play with?</label>
                <select type="text" name="pfgender" value={this.state.pfgender} onChange={this.handleChange} required>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="anyone">Anyone</option>
                </select>
                <label>Do you mind playing with people much older or younger than you?</label>
                <select type="text" name="playage" value={this.state.playage} onChange={this.handleChange} required>
                  <option value="sameage">I would prefer to play with people in my age group.</option>
                  <option value="anyage">I'm comfortable with any age group.</option>
                </select>
                <label>How do you feel about drinking on the course?</label>
                <select type="text" name="drinker" value={this.state.drinker} onChange={this.handleChange} required>
                  <option value="lightdrink">I can drink a beer or two.</option>
                  <option value="othersdrink">I don't mind others drinking.</option>
                  <option value="no alcohol">No Alcohol Please.</option>
                  <option value="drunk">Lets get drunk!</option>
                </select>
                <label>Are you a meticulous player?</label>
                <select type="text" name="meticulous" value={this.state.meticulous} onChange={this.handleChange} required>
                  <option value="slowplayer">I take my time in preparing for a shot.</option>
                  <option value="fastplayer">I play fast. I don't like to wait.</option>
                  <option value="notslow">I play at a good pace.</option>
                </select>
                <label>Are you a stickler for eqiquette?</label>
                <select type="text" name="etiquette" value={this.state.etiquette} onChange={this.handleChange} required>
                  <option value="stickler">Rules Are RULES!</option>
                  <option value="lax">I dont mind how others play.</option>
                  <option value="somerules">I would like others to have some etiquette.</option>
                </select>
                <label>How do you feel about playing with players who have a different skillset?</label>
                <select type="text" name="skillset" value={this.state.skillset} onChange={this.handleChange} required>
                  <option value="anylevel">I can play with any skill type.</option>
                  <option value="mylevel">I prefer to play with people within my handicap range.</option>
                  <option value="somelevel">I dont mind as long as there isnt a huge disparity in handicap. </option>
                </select>
                <button type="submit" disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
      }
}
