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
  amount: number;
};

const ProductDetail = () => {
  const [product, setProduct] = useState<Product>();
  const [cartProducts, setCartProducts] = useState<Product[]>();

  const getIdFromURL = () => {
    const pathname = window.location.pathname;
    return pathname.split("/")[2];
  };

  console.log(cartProducts);
  console.log(product);

  useEffect(() => {
    axios
      .get(`http://localhost:3002/products/${getIdFromURL()}`)
      .then((response) => {
        setProduct(response.data);
      });

    axios
      .get("http://localhost:3002/cart")
      .then((response) => setCartProducts(response.data));
  }, []);

  const getProductInCart = () =>
    cartProducts?.find((productInCart) => productInCart.name === product?.name);

  const hasProductInCart = getProductInCart();

  console.log(hasProductInCart, "getproductincart");

  const createCartProduct = () => {
    console.log(product?.id);
    if (product) {
      delete product?.id;
      product.amount = 1;
      axios
        .post("http://localhost:3002/cart", product)
        .then((response) => console.log(response.data, "POST"));
    }
  };

  const updateCartProduct = (product: Product) => {
    axios
      .put(`http://localhost:3002/cart/${hasProductInCart?.id}`, product)
      .then((response) => console.log(response.data, "PUT"));
  };

  const getProductAmount = (product: Product) => {
    let actualAmount = 0;
    if (product?.amount) {
      actualAmount = product?.amount;
    }

    return actualAmount + 1;
  };

  const handleAddProduct = () => {
    if (hasProductInCart) {
      console.log("adicionar mais 1");
      const productAmount = getProductAmount(hasProductInCart);
      hasProductInCart.amount = productAmount;
      updateCartProduct(hasProductInCart);
      return;
    }

    createCartProduct();
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
            <button className="ProductDetailButton" onClick={handleAddProduct}>
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
