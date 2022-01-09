import { Alert } from 'evergreen-ui';
import React, { useEffect } from 'react';

import { Header } from '../../components/molecules';

import { FilmsList, SessionsList } from '../../components/organisms';

import { getAllFilms } from '../../services/films_service';

import styles from './home_screen_style.module.scss';


const HomeScreen: React.FC = () => {

  return (
    <div className={styles['container']}>

      <Header title="Bem-vinda" date />

      <Alert intent="warning">Ao abrir pela primeira vez o site, o conteúdo pode demorar alguns segundos para carregar. Por favor, aguarde.</Alert>

      <FilmsList />

      <SessionsList />

    </div>
  );
}

export default HomeScreen;