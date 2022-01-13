import { toaster } from 'evergreen-ui';

import { Cart, SaleProduct, SaleTicket } from '../store/actions/cart_actions';

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

        returnList.map(async (s) => {
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

export async function postSale(c: Cart) {

    try {
        const response = await salesService.api.post('', { ...c, formaPagamento: 'Crédito' });
        const data = response.status;

        const url = response.headers.location.split('/');

        if (data === 201) {

            const id = url.pop();

            if (id) {
                if (c.acompanhamentos.length > 0) await postSaleProduct(c.acompanhamentos, id);

                c.ingressos.forEach(async (i) => {
                    await postTicket(i, id);
                })

            }

        }
        else {
            toaster.danger("Erro no cadastro, verifique os campos ou se já há este cadastro!");
        }

    } catch (error) {
        toaster.danger("Erro no cadastro, verifique os campos ou se já há este cadastro!");
    }
}

export async function postSaleProduct(c: SaleProduct[], id: string) {


    try {

        const body = {
            "vendaAcompanhamentosRequest": c
        }

        const response = await salesService.api.post(`/${id}`, body);

        if (response.status === 200) {
            return 200;
        }

        else {
            toaster.danger("Erro no ProdutoAcompanhamento");
        }

    } catch (error) {
        console.log(error)
    }
}


export async function postTicket(c: SaleTicket, id: string) {

    const ticketService = new GenericService('/ingressos');

    try {

        var cont = 1;
        console.log(c.quantidade)

        while (cont <= c.quantidade) {
            console.log("ok")
            const body = {
                ...c,
                vendaId: id
            }

            const response = await ticketService.api.post(``, body);

            cont++;

            if (response.status !== 201) {
                toaster.danger("Erro no Ingresso");
            }

        }

    } catch (error) {
        console.log(error)
    }
}


