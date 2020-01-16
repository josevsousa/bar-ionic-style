export interface Produto{
    uid?: string;
    codigo: number;
    nome: string;
    tipo: string;
    ml: number;
    mlDose?: string;
    lucroDose?: number;
    valor: number;
    descricao?: string;
    estoque?: number;
    dataCreate?: Date
}
