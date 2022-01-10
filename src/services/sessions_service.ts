import { toaster } from "evergreen-ui";
import GenericService, { ResponseTest } from "./generic_service";

export interface Session {
    numeroSala: number,
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
        const response = await sessionService.api.get('?size=200');
        const data: ResponseTest = response.data;
        return (data.content) as Session[] ?? [];

    } catch (error) {
        console.log(error);
    }

}

export async function getSession(film: string) {

    try {
        const response = await sessionService.api.get(`/${film}?size=200`);
        const data: ResponseTest = response.data;
        return (data.content) as Session[] ?? [];

    } catch (error) {
        console.log(error);
    }

}

export async function getTodaySessions() {

    try {
        const response = await sessionService.api.get('/hoje?size=200');
        const data: ResponseTest = response.data;
        return (data.content) as Session[] ?? [];

    } catch (error) {
        console.log(error);
    }

}

export async function deleteSession(p: Session) {

    try {
        const response = await sessionService.api.delete(`/sala=${p.numSala}&hora${p.horarioInicio}&data${p.data}`);
        const data = response.status;
        if(data === 204){
            toaster.success("Sessão excluída com sucesso!")
        }
        else {
            toaster.danger("Erro na exclusão, sessão pode conter ingressos!");
        }
         

    } catch (error) {
        toaster.danger("Erro na exclusão, sessão pode conter ingressos!");
    }

}


export async function postSession(s: Session) {

    try {
        const response = await sessionService.api.post(``, s);
        const data = response.status;
        if(data === 201){
            toaster.success("Sessão cadastrada com sucesso!")
        }
        else {
             toaster.danger("Erro no cadastro, verifique os campos ou se já há este cadastro!");
        }

    } catch (error) {
        toaster.danger("Erro no cadastro, verifique os campos ou se já há este cadastro!");
    }

}
export async function editSession(p: Session) {

    try {
        const response = await sessionService.api.put(`/sala=${p.numeroSala}&hora${p.horarioInicio}&data${p.data}`, p);
        const data = response.status;
        if(data === 200){
            toaster.success("Sessão editada com sucesso!")
        }
        else {
            toaster.danger("Erro na edição, verifique os campos!");
        }

    } catch (error) {
        toaster.danger("Erro na edição, verifique os campos!");
    }

}
