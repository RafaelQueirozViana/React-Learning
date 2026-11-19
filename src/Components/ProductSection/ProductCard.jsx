import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <p>{product.inStock ? "Is on stock!" : "Out of stock!"}</p>
    </div>
  );
}
