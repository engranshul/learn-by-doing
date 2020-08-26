import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { aboutYourself : "",isHuman: false, gender: "nil", foodPreference: "nil" };
  }

  handleChange(event) {
    
    let {name, value, type, checked } = event.target; // not every input type will have all fields
    console.log(`nameOfElement : ${name} typeOfElement : ${type} valueOfElement : ${value} and 
      checkedPropertyOfElement : ${checked}`
    );

    // handling checkbox
    if (type === "checkbox") {
      console.log("updating checkbox state");
      this.setState((prevState) => {
        return { isHuman: !prevState.isHuman };
      });
    }

    // handling radio button,textarea and select
    else  {
      console.log(`updating state for radio button,textarea and select as all
       of these has name and value property`);
      this.setState({[name]: value });
    } 
    
  }

  handleSubmit(event) {
     console.log("form has been submitted");
     alert("submit called")
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h4>Tell me about yourself</h4>
        <textarea
          id=""
          cols="30"
          rows="10"
          name="aboutYourself"
          value = {this.state.aboutYourself}
          onChange={this.handleChange}
        />
        <br />
        
        
        <label>
          <input type="checkbox" onChange={this.handleChange} />
          Are you a human??
        </label>
        <br />
        
        
        <h4>Pls select your gender</h4>
        <label>Male
        <input
          type="radio"
          name="gender"
          value="male"
          checked = {this.state.gender === "male"}  // concept of applying this check..
          onChange={this.handleChange}
        />
        </label>
        <br />
        <label>Female
        <input
          type="radio"
          name="gender"
          value="female"
          checked = {this.state.gender === "female"}
          onChange={this.handleChange}
        />
        </label>
        <br />


        <label>
          <h4>Pls select your food preference :</h4>
          <select name="foodPreference" value={this.state.foodPreference} onChange = {this.handleChange}>
            <option value="none">--Please select your food preference--</option>
            <option value="veg">veg</option>
            <option value="non veg">non veg</option>
            <option value="both">both</option>
          </select>
        </label>
        <br/>
        <br/>
          <input type="submit" value ="Submit"/>
        </form>

        


        <h3 style= {{color : "blue"}}>Your entered information is :</h3>

        <h2>ishuman : {this.state.isHuman.toString()}</h2>
        <h2>About yourself : {this.state.aboutYourself}</h2>
        <h2>Gender : {this.state.gender}</h2>
        <h2>Food preference : {this.state.foodPreference}</h2>
      </div>
    );
  }
}

export default App;

/*
In this we gonna create a form having 
text area 
two radio buttons
one checkbox 
a selectbox

Learnings :

concept of both radio buttons having same name so that they can on/off alternatively

providing single handle change for diff elements..

boolean flag printing on browser only by toString or u can use a ternary operator for
it : this.state.isHuman?"Yes":"No"

concept of providing default values in state sometimes.

handing submit event by using form and in its onSubmit providing a function.
*/
