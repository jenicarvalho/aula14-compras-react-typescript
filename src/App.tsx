import React from 'react';
import Compras from './Compras'
import Super from './Super'
import { Compra } from './types/compras'
import { Supermercado } from './types/super'

function App() {

  const mercado = {
    item: 'batata',
    quantidade: 12,
    pequenas: false
  }

  const supermercado: Supermercado = {
    nome: 'Assai',
    itens: [
      {
        id: 1,
        item: 'alface'
      },
      {
        id: 2,
        item: 'banana'
      },
      {
        id: 3,
        item: 'leite'
      }
    ]
  }

  return (
    <div className="App">
       <Compras dados={mercado} />
       <Super dados={supermercado} />
    </div>
  );
}

export default App;
