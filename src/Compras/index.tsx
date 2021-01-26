import React from 'react'
import { CompraDados } from '../types/compras'

function Compras(props: CompraDados) {
  return(
    <div>
      <h1>Compras</h1>
      <ul>
        <li>{props.dados.item}</li>
        <li>{props.dados.quantidade}</li>
        <li>Pequenas: {props.dados.pequenas ? 'Sim' : 'Não'}</li>
      </ul>
    </div>
  )
}

export default Compras