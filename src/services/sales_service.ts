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

export interface Dashboard {
    filmeMaisAssistido: string,
    filmeMenosAssistido: string,
    quantidadeIngressosVendidosNoMes: number,
    quantidadeIngressosVendidosNoTotal: number,
    reaisFaturadosComAcompanhamentos: number,
    totalAcompanhamentosDisponiveis: number,
    totalClientesCadastrados: number,
    totalFuncionariosCadastrados: number
}

const salesService = new GenericService('/vendas');

const dashboardService = new GenericService('/dashboard');


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

export async function getDashboard() {

    try {
        const response = await dashboardService.api.get('');
        const data = response.data;

        return data;

    } catch (error) {
        console.log(error);
    }

}

