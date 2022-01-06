import React from 'react';

import { Header, PictureCard } from '../../components/molecules';

import styles from './films_screen_style.module.scss';

import { Icons } from '../../theme/icons';


const FilmsScreen: React.FC = () => {
  return (
    <div className={styles['container']}>
      
      <Header
        title='Filmes'
        icon={Icons.film}
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

export default FilmsScreen;