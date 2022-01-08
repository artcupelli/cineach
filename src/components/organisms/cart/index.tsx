import React from 'react';
import { Button } from '../../atoms';

import { ClientCard, FinalPrice, LoggedUserCard } from '../../molecules';

import { ProductsCart } from '../../organisms';

import CartProps from './cart_props';

import styles from './cart_style.module.scss';


const Cart: React.FC<CartProps> = ({ openModalSearchCliente }) => {

  return (
    <div className={styles['container']}>

      <div>
        <LoggedUserCard
          name='Patricia Rufino'
          position='Gerente'
        />

        <ClientCard
          name=''
          cpf='441.423.213-32'
          openModalSearchCliente={openModalSearchCliente}
        />

        <ProductsCart />
      </div>


      <div>
        <FinalPrice price='100.50' />

        <Button>FINALIZAR COMPRA</Button>
      </div>

    </div>
  );

}

export default Cart;