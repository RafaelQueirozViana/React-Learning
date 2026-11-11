import React from "react";

const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#000000", "#FFFFFF", "#808080"] 
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#0000FF", "#FF0000", "#000000"]
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#ADD8E6", "#00008B"] 
  }
];



const App = () => {

  return (
    <>
    {produtos.map(product => {
      const formatedPrice = Number(product.preco.replace("R$ ", ""));
      
      return(   
      <section key={product.id} className="product-card">
        <h1>{product.nome}</h1>
        <h2>R$ {product.preco}</h2>
        <ul>
          {product.cores.map(color => <li style={{backgroundColor: color}} key={color}>{color}</li>)}
        </ul>
      </section>
      )
    })}
  </>
  )
} 

export default App







