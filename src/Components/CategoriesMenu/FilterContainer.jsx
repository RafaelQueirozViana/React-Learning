import React from "react";

const categories = ["eletronic", "documents", "clothes"];
const initialFilter = "all";
categories.unshift(initialFilter);
export default function FilterContainer() {
  return <div className="filter-container"></div>;
}
