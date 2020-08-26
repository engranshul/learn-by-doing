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
    <div class="toDoList">
      <ContactCard
        image={cardsArr[0].image}
        name={cardsArr[0].name}
        phone={cardsArr[0].phone}
        email={cardsArr[0].email}
      />
      <ContactCard
        image={cardsArr[1].image}
        name={cardsArr[1].name}
        phone={cardsArr[1].phone}
        email={cardsArr[1].email}
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
See how instead of hard coding in component ContactCard.js..we passed values to 
ContactCard.js component using props

Also we used array for passing information in App.js

concept of how i passed an object directly and used ternary to handle same
*/
