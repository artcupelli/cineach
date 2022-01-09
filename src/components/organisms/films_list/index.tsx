import { Spinner } from 'evergreen-ui';

import React, { useEffect, useState } from 'react';

import { Film, getAllFilms } from '../../../services/films_service';

import { SectionHeader, PictureCard } from '../../molecules';

import styles from './films_list_style.module.scss';


const FilmsList: React.FC = () => {


    const [films, setFilms] = useState<Film[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);


    async function searchAllFilms() {
        const response = await getAllFilms();;
        // const response = await getShowingFilms();
        setFilms(response || []);
        setLoading(false);
    }

    useEffect(() => {
        searchAllFilms();
    }, [])


    return (
        <div className={styles['container']}>
            <SectionHeader
                title="Filmes em cartaz"
                description="Estes são alguns dos filmes que estão sendo exibidos."
                link="/films"
                linkTitle="Ver todos"
            />


            <div className={styles['films_container']}>
                {
                    isLoading
                        ?
                        <Spinner />
                        :
                        films?.map((f) => {
                            return (
                                <PictureCard
                                    title={f.titulo}
                                    description={f.diretor}
                                    pictureUrl={f.poster}
                                    animation
                                />
                            )
                        }

                        )
                }
            </div>
        </div>
    );
}

export default FilmsList;