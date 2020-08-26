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
concept of how we combined multiple components in App.js

importing multiple components in App.js..App.js is working as table of contents..no code in it..

concept of how we used html5 elements main,footer and nav
*/
