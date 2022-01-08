import GenericService from "./generic_service";

interface Film {
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
        const filmes: Film[] = response.data;
        return filmes;

    } catch (error) {
        console.log(error);
    }

}