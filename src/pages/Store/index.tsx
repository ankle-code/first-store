import React, { useState, useEffect } from "react";
import "./style.css";
import ListingCards from "../../componets/ListingCards";
import axios from "axios";

const Store = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3002/products")
      .then((response) => setData(response.data));
  }, []);

  return (
    <div>
      <ListingCards data={data} />
    </div>
  );
};

export default Store;
