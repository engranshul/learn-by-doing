import React from "react";
import ReactDOM from "react-dom";
import Joke from "./components/Joke";

const App = function () {
  const questionBank = [
    {
      question: "what is ur choice",  punchline: "second one may be" },
    { question: "what do you want", punchline: "a cup of coffee" },
    { question: "what do you seek", punchline: "truth" },
    { punchline: "truth" },  // missing question key in object concept
  ];
  function fetchQuestionid() {
    return questionBank[Math.floor(Math.random() * questionBank.length)];
  }

  return (
    <div>
      <Joke ques={fetchQuestionid()} />
      <Joke ques={fetchQuestionid()} />
      <Joke ques={fetchQuestionid()} />
    </div>
  );
};

export default App;

/* 
How in app component return statement we used function as value

Created modular function to get random element from an array

Handling display in Joke.js using below line
{display:props.ques.question? "block" : "none"}
This is conditional rendering

Another way of doing same thing
{{ display : !props.question && "none"}}
*/
