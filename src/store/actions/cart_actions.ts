import { Client, Employee } from "../../services/people_service";

import { Product } from "../../services/products_services";

import { Ticket } from "../../services/ticket_service";


export interface SaleProduct extends Product{
    quantidade: number
}

export interface SaleTicket extends Ticket{
    quantidade: number,
    filme: string,
    precoInteira: number

}

export interface Cart {
    cpfCliente: string
    cliente: Client
    funcionario: Employee
    cpfFuncionario: string
    acompanhamentos: SaleProduct[]
    ingressos: SaleTicket[]
    valorTotal: number
}

export enum CartActionsTypes {

    // END SALE
    END_SALE = 'END_SALE',

    // ADD CLIENT
    ADD_CLIENT = 'ADD_CLIENT',
    REMOVE_CLIENT = 'REMOVE_CLIENT',

    // ADD EMPLOYEE
    ADD_EMPLOYEE = 'ADD_EMPLOYEE',
    REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE',

    // ADD TICKETS
    ADD_TICKET = 'ADD_TICKET',
    REMOVE_TICKET = 'REMOVE_TICKET',
    ADD_1_TICKET = 'ADD_1_TICKET',
    REMOVE_1_TICKET = 'REMOVE_1_TICKET',

    // ADD PRODUCTS
    ADD_PRODUCT = 'ADD_PRODUCT',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT',
    ADD_1_PRODUCT = 'ADD_1_PRODUCT',
    REMOVE_1_PRODUCT = 'REMOVE_1_PRODUCT'
}

export const endSale = () => ({
    type: CartActionsTypes.END_SALE,
});


// CLIENT

export const addClient = (payload : Client) => ({
    type: CartActionsTypes.ADD_CLIENT,
    payload
});

export const removeClient = () => ({
    type: CartActionsTypes.REMOVE_CLIENT
});


// EMPLOYEE

export const addEmployee = (payload: Employee) => ({
    type: CartActionsTypes.ADD_EMPLOYEE,
    payload
});

export const removeEmployee = () => ({
    type: CartActionsTypes.REMOVE_EMPLOYEE
});


// TICKET

export const addTicket = (payload : SaleTicket) => ({
    type: CartActionsTypes.ADD_TICKET,
    payload
});

export const add1Ticket = (payload : SaleTicket) => ({
    type: CartActionsTypes.ADD_1_TICKET,
    payload
});

export const removeTicket = (payload : SaleTicket) => ({
    type: CartActionsTypes.REMOVE_TICKET,
    payload
});

export const remove1Ticket = (payload : SaleTicket) => ({
    type: CartActionsTypes.REMOVE_1_TICKET,
    payload
});


// PRODUCT


export const addProduct = (payload : SaleProduct) => ({
    type: CartActionsTypes.ADD_PRODUCT,
    payload
});

export const add1Product = (payload : SaleProduct) => ({
    type: CartActionsTypes.ADD_1_PRODUCT,
    payload
});

export const removeProduct = (payload : SaleProduct) => ({
    type: CartActionsTypes.REMOVE_PRODUCT,
    payload
});

export const remove1Product = (payload : SaleProduct) => ({
    type: CartActionsTypes.REMOVE_1_PRODUCT,
    payload
});
