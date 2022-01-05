import React from 'react';

import { Header, OutlineCard, SectionHeader } from '../../components/molecules';

import { FilmsList, SessionsList } from '../../components/organisms';

import styles from './home_screen_style.module.scss';


const HomeScreen: React.FC = () => {
  return (
    <div className={styles['container']}>

      <Header title="Bem-vinda" />

      <FilmsList />

      <SessionsList />

    </div>
  );
}

export default HomeScreen;