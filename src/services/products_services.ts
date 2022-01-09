import { toaster } from 'evergreen-ui';
import GenericService, { ResponseTest } from './generic_service';

export interface Product {
    codigoBarras: number,
    nome: string,
    tamanho: string,
    precoUnidade: number,
    quantidadeDisponivel: number
}

const productService = new GenericService('/acompanhamentos');


export async function getAllProducts() {

    try {
        const response = await productService.api.get('?size=200');
        const data: ResponseTest = response.data;
        return (data.content) as Product[] ?? [];

    } catch (error) {
        console.log(error);
    }

}


export async function deleteProduct(cod: number) {

    try {
        const response = await productService.api.delete(`/${cod}`);
        const data = response.status;
        if(data === 204){
            toaster.success("Acompanhamento excluído com sucesso!")
        }
        else {
            toaster.danger("Erro na exclusão, acompanhamento pode estar em alguma venda!");
        }
         

    } catch (error) {
        toaster.danger("Erro na exclusão, acompanhamento pode estar em alguma venda!");
    }

}


export async function postProduct(p: Product) {

    try {
        const response = await productService.api.post(``, p);
        const data = response.status;
        if(data === 201){
            toaster.success("Acompanhamento cadastrado com sucesso!")
        }
        else {
             toaster.danger("Erro no cadastro, verifique os campos ou se já há este cadastro!");
        }

    } catch (error) {
        toaster.danger("Erro no cadastro, verifique os campos ou se já há este cadastro!");
    }

}
export async function editProduct(p: Product) {

    try {
        const response = await productService.api.put(`/${p.codigoBarras}`, p);
        const data = response.status;
        if(data === 200){
            toaster.success("Acompanhamento editado com sucesso!")
        }
        else {
            toaster.danger("Erro na edição, verifique os campos!");
        }

    } catch (error) {
        toaster.danger("Erro na edição, verifique os campos!");
    }

}