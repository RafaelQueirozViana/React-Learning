import React, { useEffect } from "react";
import "./products.css";
import getProduct from "../../../services/ProductService.js";
import ProductCard from "./ProductCard.jsx";

export default function ProductContainer({ product }) {
  const [productsList, setProducts] = React.useState([]);

  useEffect(() => {
    async function loadProducts() {
      const productsResponse = await getProduct();
      setProducts(productsResponse);
    }

    loadProducts();
  }, []);

  return (
    <div className="product-container">
      {productsList.map((productItem) => (
        <ProductCard key={productItem.id} product={productItem} />
      ))}
    </div>
  );
}
