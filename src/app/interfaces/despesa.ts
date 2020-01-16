export interface Despesa {
    uid?: string;
    nome: string;
    tipo: string;
    valor: number;
    descricao?: string;
    dataCreate?: Date
}