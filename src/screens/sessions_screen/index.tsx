import { Alert, CornerDialog, Spinner } from 'evergreen-ui';

import React, { useEffect, useState } from 'react';

import { Header } from '../../components/molecules';

import SessionCard from "../../components/molecules/session_card";

import { ModalAddSession } from '../../components/organisms';

import { Film, getAllFilms } from '../../services/films_service';

import { deleteSession, Session } from '../../services/sessions_service';

import { Icons } from '../../theme/icons';

import styles from './sessions_screen_style.module.scss';


const SessionScreen: React.FC = () => {

  const [movies, setMovies] = useState<Film[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [added, setAdded] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [editSession, setEditSession] = useState<Session>({} as Session);
  const [selDeleteSession, setDelSession] = useState<Session>({} as Session);


  useEffect(() => {
    setLoading(true);

    async function searchAllMovies() {
      const response = await getAllFilms();
      setMovies(response || []);
    }

    searchAllMovies();

    setLoading(false);
  }, [added, isModalOpen]);

  return (

    <div className={styles['container']}>


      <Header
        title='Sessões'
        icon={Icons.session}
        onAdd={() => { setEditSession({} as Session); setModalOpen(true) }}
      />

      <Alert intent="warning" >Caso demore para atualizar, ao editar, adicionar e excluir, recarregue a página.</Alert>

      <CornerDialog
        onCloseComplete={() => setDelSession({} as Session)}
        intent="danger"
        isShown={(Object.keys(selDeleteSession).length !== 0)}
        confirmLabel='Excluir'
        title="Deseja mesmo excluir esta sessão?"
        cancelLabel='Cancelar'
        onConfirm={async () => {

          await deleteSession(selDeleteSession || {} as Session);
          setDelSession({} as Session);
          setAdded(!added)

        }}
        onCancel={() => setDelSession({} as Session)}
      >
        Você deseja mesmo excluir esta sessão? Cuidado! Esta ação não tem volta!
      </CornerDialog>


      <ModalAddSession
        session={editSession}
        isOpen={isModalOpen}
        edit={(Object.keys(editSession).length !== 0)}
        onClose={() => { setEditSession({} as Session); setModalOpen(false); setAdded(!added) }}
      />

      <div className={styles['sessions_container']}>
        {
          (isLoading)
            ?
            <Spinner />
            :
            movies.map((s) => {
              return (
                <SessionCard
                  title={s.titulo}
                  year={s.anoDeLancamento}
                  url={s.poster}
                  onDelete={(x: Session) => { setDelSession(x) }}
                  onEdit={(x: Session) => { setEditSession(x); setModalOpen(true) }}

                />
              )
            })
        }


      </div>

    </div>
  );
}

export default SessionScreen;