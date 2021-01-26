import React, { useState } from 'react'
import { SupermercadoDados, SupermercadoItem } from '../types/super'

function Super(props: SupermercadoDados) {

  const [estado, setEstado] = useState<Boolean>(false)

  return(
    <div>
      <h1>super: {props.dados.nome}</h1>

      <ul>
        {props.dados.itens.map((item: SupermercadoItem) => (
          <li key={item.id}>{item.item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Super