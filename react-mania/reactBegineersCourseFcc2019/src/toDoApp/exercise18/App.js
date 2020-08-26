import React from "react";
import ContactCard from "./components/ContactCard";
import styling from "./App.css";

function App() {
  const cardsArr = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",
      name: "Mr Jack",
      phone: "123676376736",
      email: "jack@dummy.com",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",
      name: "Mr Joe",
      phone: "37837837837",
      email: "joe@dummy.com",
    },
  ];
  return (
    <div className="toDoList">
      <ContactCard
        image={cardsArr[0].image}
        name={cardsArr[0].name}
        phone={cardsArr[0].phone}
        email={cardsArr[0].email}
      />

      <ContactCard
        contact={{
          image:
            "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg",
          name: "Mr Kite",
          phone: "18918918",
          email: "kite@dummy.com",
        }}
      />
    </div>
  );
}
export default App;

/* 
In this i learnt event handling
button onClick
button onMouseOver
Same things can be applied on other similar elements like image

Also i learn how to provide arrow functions,inline functions and 
how to reference an outside from event handling methods..checkout
ContactCard.js 
*/
