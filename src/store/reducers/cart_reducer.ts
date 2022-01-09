import { Client, Employee } from "../../services/people_service";

import { Cart, CartActionsTypes } from "../actions/cart_actions";


export interface CartAction {
    type: string,
    payload: any
}

export type DispatchType = (args: CartAction) => CartAction;

const initialState: Cart = {
    acompanhamentos: [],
    cpfCliente: '',
    cpfFuncionario: '',
    ingressos: [],
    valorTotal: 0,
    cliente: {} as Client,
    funcionario: {} as Employee
}

const reducer = (state: Cart = initialState, action: CartAction): Cart => {

    switch (action.type) {

        // CLIENT

        case CartActionsTypes.ADD_CLIENT:
            return { ...state, cpfCliente: action.payload.cpf, cliente: action.payload }

        case CartActionsTypes.REMOVE_CLIENT:
            return { ...state, cpfCliente: '', cliente: {} as Client }


        // EMPLOYEE

        case CartActionsTypes.ADD_EMPLOYEE:
            return { ...state, cpfFuncionario: action.payload.cpf, funcionario: action.payload }

        case CartActionsTypes.REMOVE_EMPLOYEE:
            return { ...state, cpfFuncionario: '', funcionario: {} as Employee }


        // PRODUCT

        case CartActionsTypes.ADD_PRODUCT:

            var indexAux = -1;

            state.acompanhamentos.forEach((p, index) => {
                if (action.payload.codigoBarras === p.codigoBarras) {
                    indexAux = index;
                }
            });

            if (indexAux !== -1) {
                var acompanhamentosAux = state.acompanhamentos;

                acompanhamentosAux[indexAux].quantidade++;

                return { ...state, acompanhamentos: acompanhamentosAux, valorTotal: state.valorTotal + (action.payload.precoUnidade * 1) }

            } else {
                return { ...state, acompanhamentos: state.acompanhamentos.concat(action.payload), valorTotal: state.valorTotal + (action.payload.precoUnidade * 1) }

            }


        case CartActionsTypes.REMOVE_PRODUCT:
            return { ...state, acompanhamentos: state.acompanhamentos.filter((a) => a.codigoBarras !== action.payload.codigoBarras), valorTotal: state.valorTotal - (action.payload.precoUnidade * 1) }

        case CartActionsTypes.ADD_1_PRODUCT:
            acompanhamentosAux = state.acompanhamentos;

            const indexAdd = acompanhamentosAux.findIndex((s) => s.codigoBarras === action.payload.codigoBarras);

            acompanhamentosAux[indexAdd].quantidade++;

            return { ...state, acompanhamentos: acompanhamentosAux, valorTotal: state.valorTotal + (action.payload.precoUnidade * 1) }

        case CartActionsTypes.REMOVE_1_PRODUCT:
            acompanhamentosAux = state.acompanhamentos;

            const indexRemove = acompanhamentosAux.findIndex((s) => s.codigoBarras === action.payload.codigoBarras);

            acompanhamentosAux[indexRemove].quantidade--;

            return { ...state, acompanhamentos: acompanhamentosAux, valorTotal: state.valorTotal - (action.payload.precoUnidade * 1) }


        // TICKET

        case CartActionsTypes.ADD_TICKET:
            return { ...state, ingressos: state.ingressos.concat(action.payload) }

        case CartActionsTypes.REMOVE_TICKET:
            return {
                ...state, ingressos: state.ingressos.filter((a) => (
                    a.dataSessao !== action.payload.dataSessao &&
                    a.horaInicioSessao !== action.payload.horaInicioSessao &&
                    a.numeroSalaSessao !== action.payload.numeroSalaSessao &&
                    a.meiaEntrada !== action.payload.meiaEntrada
                ))
            }

        case CartActionsTypes.ADD_1_TICKET:
            var ticketsAux = state.ingressos;

            const indexAddT = ticketsAux.findIndex((a) =>
                a.dataSessao === action.payload.dataSessao &&
                a.horaInicioSessao === action.payload.horaInicioSessao &&
                a.numeroSalaSessao === action.payload.numeroSalaSessao &&
                a.meiaEntrada === action.payload.meiaEntrada
            );

            ticketsAux[indexAddT].quantidade++;

            return { ...state, ingressos: ticketsAux }

        case CartActionsTypes.REMOVE_1_TICKET:
            ticketsAux = state.ingressos;

            const indexRemoveT = ticketsAux.findIndex((a) =>
                a.dataSessao === action.payload.dataSessao &&
                a.horaInicioSessao === action.payload.horaInicioSessao &&
                a.numeroSalaSessao === action.payload.numeroSalaSessao &&
                a.meiaEntrada === action.payload.meiaEntrada
            );

            ticketsAux[indexRemoveT].quantidade--;

            return { ...state, ingressos: ticketsAux }

        default:
            return { ...state };
    }
}

export default reducer;