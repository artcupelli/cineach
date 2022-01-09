import GenericService, { ResponseTest } from './generic_service';

export interface Person {
    cpf: string,
    nome: string,
    email: string,
    telefones?: string[]
}

export interface Phone {
    cpf: string,
    numero: string
}

export interface Client extends Person {
    quantidadeIngressosGratisColetados: number
}

export interface Employee extends Person {
    cargo: string
}

const clientService = new GenericService('/clientes');

const employeeService = new GenericService('/funcionarios');


export async function getAllClients() {

    try {
        const response = await clientService.api.get('');
        const data: ResponseTest = response.data;

        var returnList: Client[] = data.content;

        (returnList).map(async (c) => (
            c.telefones = await getPhoneNumber(c.cpf) || []
        ));

        return returnList ?? [];

    } catch (error) {
        console.log(error);
    }

}

export async function getClient(cpf: string) {

    try {
        const response = await clientService.api.get(`/${cpf}`);
        const data = response.data;

        var client: Client = data;

        client.telefones = await getPhoneNumber(client.cpf) || []

        return client;

    } catch (error) {
        console.log(error);
    }

}

export async function getEmployee(cpf: string) {

    try {
        const response = await employeeService.api.get(`/${cpf}`);
        const data = response.data;

        var employee: Employee = data;

        employee.telefones = await getPhoneNumber(employee.cpf) || []

        return employee;

    } catch (error) {
        console.log(error);
    }

}

export async function postEmployee(employee: Employee) {

    try {
        const response = await employeeService.api.post('', employee);

        if (response.status === 200) {
            return ''
        }
        else { return response.data };


    } catch (error) {
        console.log(error);
    }

}


export async function getAllEmployees() {

    try {
        const response = await employeeService.api.get('?size=200');
        const data: ResponseTest = response.data;
        var returnList: Employee[] = data.content;

        (returnList).map(async (c) => (
            c.telefones = await getPhoneNumber(c.cpf) || []));

        return returnList ?? [];

    } catch (error) {
        console.log(error);
    }

}

export async function getPhoneNumber(cpf: string) {

    const phoneService = new GenericService('/telefones/cpf');

    try {
        const response = await phoneService.api.get(`/${cpf}`);
        const data: ResponseTest = response.data;

        var returnList: string[] = [];

        (data.content as Phone[]).map((p) => (
            returnList.push(p.numero)));

        return returnList;

    } catch (error) {
        console.log(error);
    }

}