export interface NecessidadeProps {
    id: number
    slug: string
    necessidade: string,
    qtdNecessaria: number,
    tipoQtd: string,
    ong: string,
    endereco: string,
    distancia: number,
    isKm: boolean,
    prioridade: number,
    categoria: string,
    descricao?: string
}

export interface OngsProps {

}