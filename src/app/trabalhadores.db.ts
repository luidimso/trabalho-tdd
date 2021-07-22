import { ITrabalhador, motivoAfastamento } from "./trabalhador.interface";

export const trabalhadores:ITrabalhador[] = [
    {
        nome: "Luidi",
        motivoAfastamento: motivoAfastamento.NAO_AFASTADO
    },
    {
        nome: "Matheus",
        motivoAfastamento: motivoAfastamento.POR_DOENCA
    },
    {
        nome: "Pedro",
        motivoAfastamento: motivoAfastamento.POR_DOENCA
    },
    {
        nome: "Vitor",
        motivoAfastamento: motivoAfastamento.NAO_AFASTADO
    },
    {
        nome: "Bruno",
        motivoAfastamento: motivoAfastamento.NAO_AFASTADO
    }
];