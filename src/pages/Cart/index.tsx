import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import ListingCards from "../../componets/ListingCards";

const Cart = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3002/cart")
      .then((response) => setData(response.data));
  }, []);

  console.log(data, "carrinho");

  return (
    <div className="Cart">
      <h1 className="CartTitle">Seu Carrinho!</h1>
      <ListingCards data={data} cart />
    </div>
  );
};

export default Cart;
