import React, { useEffect } from "react";
import "./app.css";
import FilterCard from "./FilterCard";

const categories = ["eletronic", "document", "key"];
const initialFilter = "all";
categories.unshift(initialFilter);

const App = () => {
  const [currentFilter, setCurrentFilter] = React.useState(initialFilter);

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  return (
    <>
      <div className="container">
        {categories.map((category) => (
          <FilterCard
            key={category}
            category={category}
            isSelected={currentFilter == category}
            changeFilter={changeFilter}
          />
        ))}
      </div>
    </>
  );
};

export default App;
