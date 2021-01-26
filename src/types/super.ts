export interface SupermercadoItem {
  id: number,
  item: string
}

export interface Supermercado {
  nome: string,
  itens: SupermercadoItem[]
}

export interface SupermercadoDados {
  dados: Supermercado
}