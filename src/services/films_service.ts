import GenericService, { ResponseTest } from "./generic_service";

export interface Film {
    titulo: string,
    anoDeLancamento: number,
    diretor: string,
    duracao: number,
    poster: string
}

const filmService = new GenericService('/filmes');


export async function getAllFilms() {

    try {
        const response = await filmService.api.get('');
        const data: ResponseTest = response.data;
        return (data.content) as Film[] ?? [];

    } catch (error) {
        console.log(error);
    }

}

export async function getFilm(title: string, year: number) {

    try {
        const response = await filmService.api.get(`/${title}/ano/${year}`);
        const data: Film = response.data;
        return (data) as Film ?? undefined;

    } catch (error) {
        console.log(error);
    }

}