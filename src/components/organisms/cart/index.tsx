import React from 'react';

import { Subtitle } from '../../atoms';

import { LoggedUserCard } from '../../molecules';

import styles from './cart_style.module.scss';


const Cart: React.FC = () => {

  return (
      <div className={styles['container']}>
          <LoggedUserCard
            name='Patricia Rufino'
            position='Gerente'
          />
      </div>
  );

}

export default Cart;