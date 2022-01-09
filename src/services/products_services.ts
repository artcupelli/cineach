import GenericService, { ResponseTest } from './generic_service';

export interface Product {
    codigoBarras: number,
    nome: string,
    tamanho: string,
    precoUnidade: number,
    quantidadeDisponivel: number
}

const sessionService = new GenericService('/acompanhamentos');


export async function getAllProducts() {

    try {
        const response = await sessionService.api.get('?size=200');
        const data: ResponseTest = response.data;
        return (data.content) as Product[] ?? [];

    } catch (error) {
        console.log(error);
    }

}