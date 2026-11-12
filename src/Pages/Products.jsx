import React from "react";
import SectionTitle from "../Components/SectionTitle";
import ProductCard from "../Components/ProductCard";

const products = [
  {
    name: "Notebook",
    properties: ["16gb ram", "512gb"],
  },

  {
    name: "Smartphone",
    properties: ["2gb ram", "128gb"],
  },
];

export default function Products() {
  return (
    <section>
      <SectionTitle text="Products" color="green" />

      {products.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </section>
  );
}
