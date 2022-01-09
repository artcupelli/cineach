import React, { useEffect, useState } from 'react';

import { Header, PictureCard } from '../../components/molecules';

import styles from './films_screen_style.module.scss';

import { Icons } from '../../theme/icons';

import { deleteFilm, Film, getAllFilms } from '../../services/films_service';

import { CornerDialog, Spinner, toaster } from 'evergreen-ui';

import { ModalAddMovie } from '../../components/organisms';


const FilmsScreen: React.FC = () => {

  const [films, setFilms] = useState<Film[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [added, setAdded] = useState<boolean>(false);
  const [editMovie, setEditMovie] = useState<Film>({} as Film);
  const [selDeleteMovie, setDelMovie] = useState<Film>({} as Film);

  useEffect(() => {
    async function searchAllFilms() {
      const response = await getAllFilms();
      setFilms(response || []);
      setLoading(false);
    }

    searchAllFilms();
  }, [added])

  return (
    <div className={styles['container']}>

      <Header
        title='Filmes'
        icon={Icons.film}
        onAdd={() => { setEditMovie({} as Film); setModalOpen(true) }}
      />

      <CornerDialog
        onCloseComplete={() => setDelMovie({} as Film)}
        intent="danger"
        isShown={selDeleteMovie?.titulo?.length > 0}
        confirmLabel='Excluir'
        title="Deseja mesmo excluir este cliente?"
        cancelLabel='Cancelar'
        onConfirm={async () => {

          const response = await deleteFilm(selDeleteMovie.titulo, selDeleteMovie.anoDeLancamento);
          setDelMovie({} as Film);
          setAdded(!added)

        }}
        onCancel={() => setDelMovie({} as Film)}
      >
        Você deseja mesmo excluir {selDeleteMovie.titulo}? Cuidado! Esta ação não tem volta!
      </CornerDialog>

      <ModalAddMovie
        film={editMovie}
        isOpen={isModalOpen}
        edit={(Object.keys(editMovie).length !== 0)}
        onClose={() => { setModalOpen(false); setAdded(!added) }}
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
                  onDelete={() => setDelMovie(f)}
                  onEdit={() => { setEditMovie(f); setModalOpen(true) }}
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