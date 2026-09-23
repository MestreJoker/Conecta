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
    descricao?: string,
    dataPublicacao: string,
    prazoEstimado: string,
    pessoasBeneficiadas: number,
    tipoPessoasBeneficiadas: string
}

export interface OngsProps {
    id: number
    nome: string
    sobre: string
    endereco: string
    bairro: string
    cidade: string
    uf: string
    cep: string
    logo: string 
}