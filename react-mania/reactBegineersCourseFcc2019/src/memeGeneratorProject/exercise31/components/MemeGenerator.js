import React from "react";
import ReactDOM from "react-dom";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage:
        "https://images-na.ssl-images-amazon.com/images/I/61luaX7FQXL._SY355_.jpg",
      allMemeImgs: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        console.log("response json is",response)  
        const { memes } = response.data;  // response has a data field that has all memes
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
      event.preventDefault();
      const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
      const randMemeImg = this.state.allMemeImgs[randNum].url
      this.setState({"randomImage":randMemeImg})


  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="topText"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>
        <h3>{this.state.topText}</h3>
        <img src={this.state.randomImage} alt="problem loading image" />
        <h3>{this.state.bottomText}</h3>
      </div>
    );
  }
}

export default MemeGenerator;
/* 
Meme generator will be holding data and will make call to api..
so this will be a class component..
*/
