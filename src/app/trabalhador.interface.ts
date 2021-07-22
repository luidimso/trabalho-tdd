export interface ITrabalhador {
    nome: string,
    motivoAfastamento: number
}

export enum motivoAfastamento {
    NAO_AFASTADO = 0,
    POR_DOENCA = 1
}