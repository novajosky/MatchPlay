import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        age: '',
        citystate: '',
        gender: '',
        pfgender: '',
        handicap: '',
        playage: '',
        drinker: '',
        meticulous:'',
        etiquette: '',
        skillset: '',
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
            //promise returned by the signup service method will
            //resolve to the use object included in the payload of
            //the JSON web token JWT
            const user = await signUp(formData);
            this.props.setUser(user);

        } catch {
            this.setState({ error: 'Sign up Failed - Try again' });
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
                <input type="age" placeholder="Example: 33" name="age" value={this.state.age} onChange={this.handleChange} required />
                <label>Location</label>
                <input type="citystate" placeholder="Example: Seattle, Washington" name="citystate" value={this.state.citystate} onChange={this.handleChange} required />
                <label>Gender</label>
                <select type="gender" name="gender" value={this.state.gender} onChange={this.handleChange} required>
                  <option value="male">Male</option>  
                  <option value="female">Female</option>  
                  <option value="other">Other</option>  
                </select> 
                <label>Do you have a preferred gender you would like to play with?</label>
                <select type="pfgender" name="pfgender" value={this.state.pfgender} onChange={this.handleChange} required>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="anyone">Anyone</option>
                </select>
                <label>What is your Handicap?</label>
                <select type="handicap" name="handicap" value={this.state.handicap} onChange={this.handleChange} required>
                  <option value="pro">0 - 10</option>
                  <option value="advanced">10 - 20</option>
                  <option value="novice">20+</option>
                  <option value="beginner">Not Sure</option>
                </select>
                <label>Do you mind playing with people much older/younger than you?</label>
                <select type="playage" name="playage" value={this.state.playage} onChange={this.handleChange} required>
                  <option value="sameage">I would prefer to play with people in my age group.</option>
                  <option value="anyage">I'm confortable with any age group.</option>
                </select>
                <label>How do you feel about drinking on the course?</label>
                <select type="drinker" name="drinker" value={this.state.drinker} onChange={this.handleChange} required>
                  <option value="lightdrink">I can drink a beer or two.</option>
                  <option value="othersdrink">I don't mind others drinking.</option>
                  <option value="no alcohol">No Alcohol Please.</option>
                  <option value="drunk">Lets get drunk!</option>
                </select>
                <label>Are you a meticulous player?</label>
                <select type="meticulous" name="meticulous" value={this.state.meticulous} onChange={this.handleChange} required>
                  <option value="slowplayer">I take my time in preparing for a shot.</option>
                  <option value="fastplayer">I play fast. I don't like to wait.</option>
                </select>
                <label>Are you a stickler for eqiquette?</label>
                <select type="etiquette" name="etiquette" value={this.state.etiquette} onChange={this.handleChange} required>
                  <option value="stickler">Rules Are RULES!</option>
                  <option value="lax">I dont mind how others play.</option>
                  <option value="somerules">I would like others to have some etiquette.</option>
                </select>
                <label>How do you feel about playing with players who have a different skillset?</label>
                <select type="skillset" name="skillset" value={this.state.skillset} onChange={this.handleChange} required>
                  <option>I can play with any skill type.</option>
                  <option>I prefer to play with people within my handicap range.</option>
                  <option>I dont mind as long as there isnt a huge disparity in handicap. </option>
                </select>
                <button type="submit" disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
      }
}
