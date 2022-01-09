import { Film } from "../../services/films_service";

export enum FilmsActionsTypes {

    // GET ALL FILMS
    GET_ALL_FILMS_REQUEST = 'GET_ALL_FILMS_REQUEST',
    GET_ALL_FILMS_SUCESS = 'GET_ALL_FILMS_SUCESS',
    GET_ALL_FILMS_FAILURE = 'GET_ALL_FILMS_FAILURE',

    // CREATE FILM

    // UPDATE FILM

    // DELETE FILM

    // GET BY YEAR AND TITLE
}


export const getAllFilmsRequest = () => ({
    type: FilmsActionsTypes.GET_ALL_FILMS_REQUEST
});


export const getAllFilmsSucess = (payload: Film[]) => ({
    type: FilmsActionsTypes.GET_ALL_FILMS_SUCESS,
    payload
});


export const getAllFilmsFaulure = () => ({
    type: FilmsActionsTypes.GET_ALL_FILMS_FAILURE
});