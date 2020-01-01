export interface Produto{
    uid?: string;
    codigo: number;
    nome: string;
    tipo: string;
    ml: number;
    valor: number;
    descricao?: string;
    estoque?: number;
    dataCreate?: Date
}
