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
  const data = produtos.filter(({preco}) => Number(preco.replace("R$ ", "")) > 1500)
 

  return (
    <>
  <section>
    {data.map(({id, nome, preco, cores}) => 
    <div key={id}>
      <h1>{nome}</h1>
      <h2>{preco}</h2>
      <ul>
        {cores.map((color) =>
           <li style={{color: "#fff", backgroundColor: color}} key={color}>{color}</li>
           )}
      </ul>
    </div>
  )}
  </section>
  </>
  )
} 

export default App







