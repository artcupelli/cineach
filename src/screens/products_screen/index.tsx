import React from 'react';

import { Header } from '../../components/molecules';

import styles from './products_screen_style.module.scss';

import { Icons } from '../../theme/icons';

import SubtileTextCard from '../../components/molecules/subtile_text_card';


const ProductsScreen: React.FC = () => {
  return (
    <div className={styles['container']}>
      <Header title='Produtos' outline icon={Icons.product} />

      <div className={styles['products_container']}>
        <SubtileTextCard
          subtitle='Pipoca'
          text='500g'
          rightSubtitle='R$ 17.90'
        />

        <SubtileTextCard
          subtitle='Pipoca'
          text='500g'
          rightSubtitle='R$ 17.90'
        />

        <SubtileTextCard
          subtitle='Pipoca'
          text='500g'
          rightSubtitle='R$ 17.90'
        />

        <SubtileTextCard
          subtitle='Pipoca'
          text='500g'
          rightSubtitle='R$ 17.90'
        />

        <SubtileTextCard
          subtitle='Pipoca'
          text='500g'
          rightSubtitle='R$ 17.90'
        />

        <SubtileTextCard
          subtitle='Pipoca'
          text='500g'
          rightSubtitle='R$ 17.90'
        />

        <SubtileTextCard
          subtitle='Pipoca'
          text='500g'
          rightSubtitle='R$ 17.90'
        />

        <SubtileTextCard
          subtitle='Pipoca'
          text='500g'
          rightSubtitle='R$ 17.90'
        />

        <SubtileTextCard
          subtitle='Pipoca'
          text='500g'
          rightSubtitle='R$ 17.90'
        />

        <SubtileTextCard
          subtitle='Pipoca'
          text='500g'
          rightSubtitle='R$ 17.90'
        />

        <SubtileTextCard
          subtitle='Pipoca'
          text='500g'
          rightSubtitle='R$ 17.90'
        />

        <SubtileTextCard
          subtitle='Pipoca'
          text='500g'
          rightSubtitle='R$ 17.90'
        />

        <SubtileTextCard
          subtitle='Pipoca'
          text='500g'
          rightSubtitle='R$ 17.90'
        />

        
        
      </div>
    </div>
  );
}

export default ProductsScreen;