import React from "react";

  const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};


const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};



const App = () => {
  const dados = luana;

  const filtered = dados.compras.reduce((acumulator, p) => {
  const price = Number(p.preco.replace("R$", ""));
  acumulator+=price
  } , 0);

  return (
    <>
  <p>Client: {dados.cliente}</p>
  <p>Age: {dados.idade}</p>
  <p>Situation: {dados.ativa ? "Active": "Not active"}</p>
  <p>Total Spent: {dados.compras.reduce((acumulator, p) => acumulator+=p.preco, 0)}</p>
  </>
  )
}

export default App







