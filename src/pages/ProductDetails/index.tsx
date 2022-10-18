import "./style.css";

const ProductDetail = () => {
  const getIdFromURL = () => {
    const pathname = window.location.pathname;
    return pathname.split("/")[2];
  };

  console.log(getIdFromURL());

  return <div className="ProductDetail">Página do Produto</div>;
};

export default ProductDetail;
