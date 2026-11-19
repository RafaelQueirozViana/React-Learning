import React from "react";

export default function FilterCard({ category, isSelected, changeFilter }) {
  return (
    <button
      className={"filterCard" + (isSelected ? " active" : "")}
      onClick={() => changeFilter(category)}
    >
      {category}
    </button>
  );
}
