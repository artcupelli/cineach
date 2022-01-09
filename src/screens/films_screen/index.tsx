import React, { useEffect, useState } from 'react';

import { Header, PictureCard } from '../../components/molecules';

import styles from './films_screen_style.module.scss';

import { Icons } from '../../theme/icons';

import { Film, getAllFilms } from '../../services/films_service';
import { Spinner } from 'evergreen-ui';


const FilmsScreen: React.FC = () => {

  const [films, setFilms] = useState<Film[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);


  async function searchAllFilms() {
    const response = await getAllFilms();
    setFilms(response || []);
    setLoading(false);
  }

  useEffect(() => {
    searchAllFilms();
  }, [])

  return (
    <div className={styles['container']}>

      <Header
        title='Filmes'
        icon={Icons.film}
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
                  description={`${f.diretor}, ${f.duracao}min (${f.anoDeLancamento})`}
                  pictureUrl={f.poster}
                  animation={false}
                />
              )
            }

            )
        }
      </div>
    </div>
  );
}

export default FilmsScreen;