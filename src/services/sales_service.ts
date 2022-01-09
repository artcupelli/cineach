import GenericService, { ResponseTest } from './generic_service';

import { Client, Employee, getClient, getEmployee } from './people_service';

export interface Sale {
    id: number,
    formaPagamento: string,
    cpfCliente: string,
    cpfFuncionario: string,
    cliente?: Client,
    funcionario?: Employee
}

const salesService = new GenericService('/vendas');


export async function getAllSales() {

    try {
        const response = await salesService.api.get('?size=200');
        const data: ResponseTest = response.data;

        var returnList: Sale[] = data.content;
        
        returnList.map( async (s)=>{
            s.cliente = await getClient(s.cpfCliente);
            s.funcionario = await getEmployee(s.cpfFuncionario);
        });

        return (returnList) as Sale[] ?? [];

    } catch (error) {
        console.log(error);
    }

}