import { toaster } from 'evergreen-ui';
import React, { Dispatch, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { postSale } from '../../../services/sales_service';

import { Cart, endSale } from '../../../store/actions/cart_actions';

import { Button } from '../../atoms';

import { ClientCard, FinalPrice } from '../../molecules';

import { ProductsCart } from '../../organisms';

import CartProps from './cart_props';

import styles from './cart_style.module.scss';


const CartComponent: React.FC<CartProps> = ({ openModalSearchCliente }) => {

  const cart: Cart = useSelector(
    (state: Cart) => state
  );

  const dispatch: Dispatch<any> = useDispatch();

  const clearSale = useCallback(
    () => dispatch(endSale()), [dispatch]
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

        <Button onClick={() => { postSale(cart); clearSale(); toaster.success("Compra efetuda!"); }} >FINALIZAR COMPRA</Button>

      </div>

    </div>
  );

}

export default CartComponent;