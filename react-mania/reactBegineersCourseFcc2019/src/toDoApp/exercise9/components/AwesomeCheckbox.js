import React from "react";

function AwesomeCheckbox() {
  let date = new Date();
  let hours = date.getHours();
  let timeOfday = "evening";

  if (hours < 13) {
    timeOfday = "morning";
  }

  let customStyle = {
    "font-family": "Courier New', Courier, monospace",
  };

  if (false) {
    customStyle["font-size"] = "100px";
    customStyle.color = "blue";
  } else {
    customStyle["font-size"] = "200px";
    customStyle.color = "red";
  }

  return (
    <div class="checkbx" style={{ backgroundColor: "red" }} style={customStyle}>
      <input id="checkid" type="checkbox" value="test" />
      <label for="checkid">{timeOfday}</label>
    </div>
  );
}

export default AwesomeCheckbox;
