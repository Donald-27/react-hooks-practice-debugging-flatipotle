import React from "react";

function SideForm({ sides, handleChange }) {
  return (
    <fieldset>
      <legend>Sides</legend>
      <label>
        <input
          type="checkbox"
          name="sides"
          value="Chips"
          checked={sides.includes("Chips")}
          onChange={handleChange}
        />
        Chips
      </label>
      <label>
        <input
          type="checkbox"
          name="sides"
          value="Guacamole"
          checked={sides.includes("Guacamole")}
          onChange={handleChange}
        />
        Guacamole
      </label>
    </fieldset>
  );
}

export default SideForm;
