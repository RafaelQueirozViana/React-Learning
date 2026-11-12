import React from "react";
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import Header from "./Components/Header";

const App = () => {
  const { pathname } = window.location;
  return (
    <>
      <Header />

      {pathname == "/" && <Home />}

      {pathname == "/products" && <Products />}
    </>
  );
};

export default App;
