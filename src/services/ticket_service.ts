import GenericService, { ResponseTest } from './generic_service';

export interface Ticket {
    id: number,
    meiaEntrada: boolean,
    vendaId: number,
    numeroSalaSessao: number,
    horaInicioSessao: string,
    dataSessao: string
}

const ticketService = new GenericService('/ingresso');


