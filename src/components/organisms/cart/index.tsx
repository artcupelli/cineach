import React from 'react';

import { useSelector } from 'react-redux';

import { Cart } from '../../../store/actions/cart_actions';

import { Button } from '../../atoms';

import { ClientCard, FinalPrice } from '../../molecules';

import { ProductsCart } from '../../organisms';

import CartProps from './cart_props';

import styles from './cart_style.module.scss';


const CartComponent: React.FC<CartProps> = ({ openModalSearchCliente }) => {

  const cart: Cart = useSelector(
    (state: Cart) => state
  );


  return (
    <div className={styles['container']}>

      <div>
        <ClientCard
          funcionario
          name={cart.funcionario.nome}
          cpf={cart.cpfFuncionario}
          openModalSearchCliente={openModalSearchCliente}
        />

        <ClientCard
          name={cart.cliente.nome}
          cpf={cart.cpfCliente}
          openModalSearchCliente={openModalSearchCliente}
        />

        <ProductsCart />
      </div>


      <div>
        <FinalPrice price={`${cart.valorTotal.toFixed(2)}`} />

        <Button>FINALIZAR COMPRA</Button>
      </div>

    </div>
  );

}

export default CartComponent;