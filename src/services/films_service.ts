import { toaster } from "evergreen-ui";
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
        const response = await filmService.api.get('?size=200');
        const data: ResponseTest = response.data;
        return (data.content) as Film[] ?? [];

    } catch (error) {
        console.log(error);
    }

}

export async function getShowingFilms() {

    try {
        const response = await filmService.api.get('/cartaz?size=200');
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

export async function getFilmMostWatched() {

    try {
        const response = await filmService.api.get(`/maisassistido`);
        const data: Film = response.data;
        return (data) as Film ?? undefined;

    } catch (error) {
        console.log(error);
    }

}

export async function getFilmLeastWatched() {

    try {
        const response = await filmService.api.get(`/menosassistido`);
        const data: Film = response.data;
        return (data) as Film ?? undefined;

    } catch (error) {
        console.log(error);
    }

}


export async function deleteFilm(title: string, year: number) {

    try {
        const response = await filmService.api.delete(`/${title}/ano/${year}`);
        const data = response.status;
        if(data === 204){
            toaster.success("Filme excluído com sucesso!")
        }
        else {
            toaster.danger("Erro na exclusão, filme pode conter ingressos!");
        }
         

    } catch (error) {
        toaster.danger("Erro na exclusão, filme pode conter ingressos!");
    }

}


export async function postFilm(film: Film) {

    try {
        const response = await filmService.api.post(``, film);
        const data = response.status;
        if(data === 201){
            toaster.success("Filme cadastrado com sucesso!")
        }
        else {
             toaster.danger("Erro no cadastro, verifique os campos ou se já há este cadastro!");
        }

    } catch (error) {
        toaster.danger("Erro no cadastro, verifique os campos ou se já há este cadastro!");
    }

}
export async function editFilm(film: Film) {

    try {
        const response = await filmService.api.put(`/${film.titulo}/ano/${film.anoDeLancamento}`, film);
        const data = response.status;
        if(data === 200){
            toaster.success("Filme editado com sucesso!")
        }
        else {
            toaster.danger("Erro na edição, verifique os campos!");
        }

    } catch (error) {
        toaster.danger("Erro na edição, verifique os campos!");
    }

}