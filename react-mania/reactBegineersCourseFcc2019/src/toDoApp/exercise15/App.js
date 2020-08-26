import React from "react";
import AwesomeFooter from "./components/AwesomeFooter";
import AwesomeMainContent from "./components/AwesomeMainContent";
import AwesomeNavbar from "./components/AwesomeNavbar";
import Styling from "./App.css";

function App() {
   return <div class ="site">
      <AwesomeNavbar/>
      <AwesomeMainContent/>
      <AwesomeFooter/>
    </div>;
    
}

export default App;

/* 
In this we Gonna change every functional component into class component..as class component
provides us some new features also..example if we need state then component needs to be a 
class based component..


One major difference is that in class components we have to access props using this.props.xyz
instead of props.xyz in functional components

In class components we wrap return in render() {}

props are immutable..the component that is receiving props can not change it..

*/
