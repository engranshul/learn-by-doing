import React from "react";
import Styling from "./AwesomeCheckbox.css";

function AwesomeCheckbox() {
  return (
    <div class="checkbx">
        <input id="checkid" type="checkbox" value="test" />
        <label for="checkid">testdata</label>
    </div>
  );
}

export default AwesomeCheckbox;
