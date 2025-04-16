import React, { useState } from "react";
import Side from "./Side";

function Order(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <li onClick={handleClick}>
      <p>
        <strong>Protein:</strong> {props.protein}
      </p>
      <p>
        <strong>Fillings:</strong> {props.fillings.join(", ")}
      </p>
      <p>
        <strong>Toppings:</strong> {props.toppings.join(", ")}
      </p>
      {isClicked && <Side sides={props.sides} />}
    </li>
  );
}

export default Order;
