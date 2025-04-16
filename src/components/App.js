import React, { useState } from "react";
import Form from "./Form";
import Order from "./Order";

function App() {
  const [orders, setOrders] = useState([]);

  function addOrder(order) {
    setOrders([...orders, order]);
  }

  const displayOrders = orders.map((order, idx) => (
    <Order key={idx} {...order} />
  ));

  return (
    <div>
      <h1>🌯 Flatipotle 🌯</h1>
      <Form addOrder={addOrder} />
      <h2>Orders</h2>
      <ul>{displayOrders}</ul>
    </div>
  );
}

export default App;
