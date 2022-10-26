import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

type Product = {
  id?: number;
  image: string;
  name: string;
  price: number;
  rating: number;
  description: string;
};

const ProductDetail = () => {
  const [product, setProduct] = useState<Product>();

  const getIdFromURL = () => {
    const pathname = window.location.pathname;
    return pathname.split("/")[2];
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3002/products/${getIdFromURL()}`)
      .then((response) => {
        setProduct(response.data);
      });
  }, []);

  const createCartProduct = () => {
    console.log(product?.id);
    delete product?.id;
    axios
      .post("http://localhost:3002/cart", product)
      .then((response) => console.log(response.data, "POST"));
  };

  return (
    <div className="ProductDetail">
      <h1 className="ProductDetailTitle">{product?.name}</h1>
      <div className="ProductDetailContent">
        <div className="ProductDetailImage">
          <img src={product?.image} />
        </div>
        <div className="ProductDetailAbout">
          <p className="ProductDetailPrice">R$ {product?.price.toFixed(2)}</p>
          <p className="ProductDetailDescription">{product?.description}</p>
          <div className="ProductDetailButtonContainer">
            <button className="ProductDetailButton" onClick={createCartProduct}>
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
