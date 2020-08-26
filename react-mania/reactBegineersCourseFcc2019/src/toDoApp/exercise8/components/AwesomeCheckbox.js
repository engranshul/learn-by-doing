import React from "react";
import Styling from "./AwesomeCheckbox.css";

function AwesomeCheckbox() {
  let date = new Date();
  let hours = date.getHours();
  let timeOfday = "evening";

  if (hours < 13) {
    timeOfday = "morning";
  }

  return (
    <div class="checkbx">
      <input id="checkid" type="checkbox" value="test" />
      <label for="checkid">{timeOfday}</label>
    </div>
  );
}

export default AwesomeCheckbox;
