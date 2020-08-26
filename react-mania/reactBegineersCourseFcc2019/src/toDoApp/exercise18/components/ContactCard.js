import React from "react";
import styling from "./ContactCard.css";

function ContactCard(props) {
  console.log("props are", props);
  const isContactObjPresent = props.contact;
  return (
    <div className="toDoItem" style={{ backgroundColor: "pink" }}>
      {isContactObjPresent ? (
        <div>
          <img src={props.contact.image} alt="" height="50%" width="50%" />
          <h1>{props.contact.name}</h1>
          <h4>Phone : {props.contact.phone}</h4>
          <h4>Email : {props.contact.email}</h4>
          <button onClick={console.log("how dare u clicked me")}>
            click me...testing onclick..
          </button>
          <br/>
          <button onMouseOver = {()=> console.log("learning arrow function")}>arrow function test</button>
        </div>
      ) : (
        <div>
          <img src={props.image} alt="" height="50%" width="50%" />
          <h1>{props.name}</h1>
          <h4>Phone : {props.phone}</h4>
          <h4>Email : {props.email}</h4>
          <button onClick={listenToEvents}>
            click me..testing onclick by defining method outside onClick
          </button>
        </div>
      )}
    </div>
  );

  function listenToEvents() {
    console.log("listening to events..");
  }
}

export default ContactCard;
