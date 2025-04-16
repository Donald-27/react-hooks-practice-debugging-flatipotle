import React, { useState } from "react";
import ProteinForm from "./ProteinForm";
import FillingForm from "./FillingForm";
import ToppingForm from "./ToppingForm";
import SideForm from "./SideForm";

function Form(props) {
  const [formState, setFormState] = useState({
    protein: "",
    fillings: [],
    toppings: [],
    sides: [],
  });

  function handleChange(event) {
    const { name, value, checked } = event.target;

    if (name === "protein") {
      setFormState({ ...formState, protein: value });
    } else {
      const updatedArray = formState[name];
      if (checked) {
        updatedArray.push(value);
      } else {
        const index = updatedArray.indexOf(value);
        if (index !== -1) {
          updatedArray.splice(index, 1);
        }
      }
      setFormState({ ...formState, [name]: [...updatedArray] });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addOrder(formState);
    setFormState({
      protein: "",
      fillings: [],
      toppings: [],
      sides: [],
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <ProteinForm protein={formState.protein} handleChange={handleChange} />
      <FillingForm fillings={formState.fillings} handleChange={handleChange} />
      <ToppingForm toppings={formState.toppings} handleChange={handleChange} />
      <SideForm sides={formState.sides} handleChange={handleChange} />
      <input type="submit" value="Submit Order" />
    </form>
  );
}

export default Form;
