import React from "react";

export default function ProductCard({ name, properties }) {
  return (
    <div
      className="product-card"
      style={{
        border: "1px solid gray",
        marginBottom: "10px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <p>{name}</p>
      <ul>
        {properties.map((property) => (
          <li key={property}>{property}</li>
        ))}
      </ul>
    </div>
  );
}
