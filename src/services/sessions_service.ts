import GenericService, { ResponseTest } from "./generic_service";

export interface Session {
    numSala: number,
    horarioInicio: string,
    data: string,
    quantidadeTotalIngressos: number,
    precoInteira: number,
    precoMeia: number,
    tituloFilme: string,
    anoFilme: number
}

const sessionService = new GenericService('/sessoes');


export async function getAllSessions() {

    try {
        const response = await sessionService.api.get('');
        const data: ResponseTest = response.data;
        return (data.content) as Session[] ?? [];

    } catch (error) {
        console.log(error);
    }

}