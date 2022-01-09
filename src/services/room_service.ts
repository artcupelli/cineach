import { toaster } from "evergreen-ui";

import GenericService, { ResponseTest } from "./generic_service";

export interface Room {
    numero: number,
    tipo: string,
    capacidade: number
}

const roomService = new GenericService('/salas');


export async function getAllRooms() {

    try {
        const response = await roomService.api.get('?size=200');
        const data: ResponseTest = response.data;
        return (data.content) as Room[] ?? [];

    } catch (error) {
        console.log(error);
    }

}

export async function getRoom(number: number) {

    try {
        const response = await roomService.api.get(`/${number}`);
        const data: Room = response.data;
        return (data) as Room ?? undefined;

    } catch (error) {
        console.log(error);
    }

}


export async function deleteRoom(number: number) {

    try {
        const response = await roomService.api.delete(`/${number}`);
        const data = response.status;
        if(data === 204){
            toaster.success("Sala excluída com sucesso!")
        }
        else {
            toaster.danger("Erro na exclusão, sala pode conter sessão!");
        }

    } catch (error) {
        toaster.danger("Erro na exclusão, sala pode conter sessão!");
    }

}


export async function postRoom(room: Room) {

    try {
        const response = await roomService.api.post(``, room);
        const data = response.status;
        if(data === 201){
            toaster.success("Sala cadastrada com sucesso!")
        }
        else {
             toaster.danger("Erro no cadastro, verifique os campos ou se já há este cadastro!");
        }

    } catch (error) {
        toaster.danger("Erro no cadastro, verifique os campos ou se já há este cadastro!");
    }

}

export async function editRoom(room: Room) {

    try {
        const response = await roomService.api.put(`/${room.numero}`, room);
        const data = response.status;
        if(data === 200){
            toaster.success("Sala editada com sucesso!")
        }
        else {
            toaster.danger("Erro na edição, verifique os campos!");
        }

    } catch (error) {
        toaster.danger("Erro na edição, verifique os campos!");
    }

}