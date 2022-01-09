import { toaster } from 'evergreen-ui';
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
        const response = await clientService.api.get('?size=200');
        const data: ResponseTest = response.data;

        var returnList: Client[] = data.content;

        (returnList).map(async (c) => (
            c.telefones = await getPhoneNumber(c.cpf) || []
        ));

        return returnList ?? [];

    } catch (error) {
        toaster.danger("Erro ao buscar usuários, tente novamente mais tarde!");
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
        toaster.danger("Cliente não existe! Tente outro CPF!")
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
        const data = response.status;

        if (data === 201) {
            toaster.success("Funcionário cadastrado com sucesso!")
        }
        else {
            toaster.danger("Erro no cadastro edição, verifique os campos!");
        }


    } catch (error) {
        toaster.danger("Erro no cadastro edição, verifique os campos!");
    }

}

export async function editEmployee(employee: Employee) {

    try {
        const response = await employeeService.api.put(`/${employee.cpf}`, employee);
        const data = response.status;

        if (data === 200) {
            toaster.success("Funcionário editado com sucesso!")
        }
        else {
            toaster.danger("Erro na edição, verifique os campos!");
        }


    } catch (error) {
        console.log(error);
    }

}

export async function postClient(client: Client) {

    try {
        const response = await clientService.api.post('', client);
        const data = response.status;

        if (data === 201) {
            toaster.success("Funcionário cadastrado com sucesso!")
        }
        else {
            toaster.danger("Erro no cadastro, verifique os campos!");
        }

    } catch (error) {
        toaster.danger("Erro no cadastro, verifique os campos!");
    }

}

export async function editClient(client: Client) {

    try {
        const response = await clientService.api.put(`/${client.cpf}`, client);
        const data = response.status;

        if (data === 200) {
            toaster.success("Cliente editado com sucesso!")
        }
        else {
            toaster.danger("Erro na edição, verifique os campos!");
        }

    } catch (error) {
        toaster.danger("Erro na edição, verifique os campos!");
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
        toaster.danger("Erro ao buscar usuários, tente novamente mais tarde!");
    }

}

export async function deleteEmployee(cpf: string): Promise<any> {

    try {
        const response = await employeeService.api.delete(`/${cpf}`);
        const data = response.status;

        if (data === 204) {
            toaster.success("Funcionário excluído com sucesso!")
        }
        else {
            toaster.danger("Erro na exclusão!");
        }

    } catch (error) {
        toaster.danger("Erro na exclusão, tente novamente mais tarde!");
    }

}

export async function deleteClient(cpf: string): Promise<any> {

    try {
        const response = await clientService.api.delete(`/${cpf}`);
        const data = response.status;

        if (data === 204) {
            toaster.success("Cliente excluído com sucesso!")
        }
        else {
            toaster.danger("Erro na exclusão!");
        }

    } catch (error) {
        toaster.danger("Erro na exclusão, tente novamente mais tarde!");
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