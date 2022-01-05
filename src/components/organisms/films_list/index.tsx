import React from 'react';

import { SectionHeader, PictureCard } from '../../molecules';

import styles from './films_list_style.module.scss';


const FilmsList: React.FC = () => {

    return (
        <div className={styles['container']}>
            <SectionHeader
                title="Filmes em cartaz"
                description="Estes são alguns dos filmes que serão exibidos hoje."
                link="/films"
                linkTitle="Ver todos"
            />


            <div className={styles['films_container']}>
                <PictureCard
                    title="Spider-Man (2019)"
                    description="17/12 às 22:00    Sala 01"
                    pictureUrl="https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png"
                />
                <PictureCard
                    title="Spider-Man (2019)"
                    description="17/12 às 22:00    Sala 01"
                    pictureUrl="https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png"
                />
                <PictureCard
                    title="Spider-Man (2019)"
                    description="17/12 às 22:00    Sala 01"
                    pictureUrl="https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png"
                />
                <PictureCard
                    title="Spider-Man (2019)"
                    description="17/12 às 22:00    Sala 01"
                    pictureUrl="https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png"
                />
                <PictureCard
                    title="Spider-Man (2019)"
                    description="17/12 às 22:00    Sala 01"
                    pictureUrl="https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png"
                />
                <PictureCard
                    title="Spider-Man (2019)"
                    description="17/12 às 22:00    Sala 01"
                    pictureUrl="https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png"
                />
            </div>
        </div>
    );
}

export default FilmsList;