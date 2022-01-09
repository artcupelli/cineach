import axios, { AxiosInstance } from 'axios';

export interface ResponseTest {
    content: any
}


export default class GenericService {
    readonly api: AxiosInstance;
    url: string;

    constructor(url: string) {
        this.url = url;
        this.api = axios.create({ baseURL: `https://cineach-app.herokuapp.com/api${url}` });
    }

}
