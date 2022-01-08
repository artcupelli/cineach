import React, { useEffect } from 'react';

import { Header } from '../../components/molecules';

import { FilmsList, SessionsList } from '../../components/organisms';

import { getAllFilms } from '../../services/films_service';

import styles from './home_screen_style.module.scss';


const HomeScreen: React.FC = () => {

  useEffect(() => {
    async function test() {
      console.log(await getAllFilms());
    }

    test();
  })

  return (
    <div className={styles['container']}>

      <Header title="Bem-vinda" date />

      <FilmsList />

      <SessionsList />

    </div>
  );
}

export default HomeScreen;