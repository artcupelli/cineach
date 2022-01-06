import React from 'react';

import { Header } from '../../components/molecules';

import SessionCard from "../../components/molecules/session_card";

import { Icons } from '../../theme/icons';

import styles from './sessions_screen_style.module.scss';


const SessionScreen: React.FC = () => {
  return (

    <div className={styles['container']}>

      <Header
        title='Sessões'
        icon={Icons.session}
      />

      <div className={styles['sessions_container']}>
        <SessionCard
          title="Spider-Man (2019)"
          description="17/12 às 22:00    Sala 01"
          pictureUrl="https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png"
        />
        <SessionCard
          title="Spider-Man (2019)"
          description="17/12 às 22:00    Sala 01"
          pictureUrl="https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png"
        />

        <SessionCard
          title="Spider-Man (2019)"
          description="17/12 às 22:00    Sala 01"
          pictureUrl="https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png"
        />
        <SessionCard
          title="Spider-Man (2019)"
          description="17/12 às 22:00    Sala 01"
          pictureUrl="https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png"
        />
        <SessionCard
          title="Spider-Man (2019)"
          description="17/12 às 22:00    Sala 01"
          pictureUrl="https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png"
        />
      </div>

    </div>
  );
}

export default SessionScreen;