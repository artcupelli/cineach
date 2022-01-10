import React, { Dispatch, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { add1Product, add1Ticket, Cart, remove1Product, remove1Ticket, removeProduct, removeTicket, SaleProduct, SaleTicket } from '../../../store/actions/cart_actions';

import { Detail, Text } from '../../atoms';

import { CartItemCard } from '../../molecules';

import styles from './products_cart_style.module.scss';


const ProductsCart: React.FC = () => {

    const cart: Cart = useSelector(
        (state: Cart) => state
    );


    const dispatch: Dispatch<any> = useDispatch();

    const addProduct = useCallback(
        (product: SaleProduct) => dispatch(add1Product(product)), [dispatch]
    );

    const removeProductAux = (product: SaleProduct) => {
        if (product.quantidade === 1) {
            endProduct(product)
        } else {
            subProduct(product)
        }
    }

    const subProduct = useCallback(
        (product: SaleProduct) => dispatch(remove1Product(product)), [dispatch]
    );

    const endProduct = useCallback(
        (product: SaleProduct) => dispatch(removeProduct(product)), [dispatch]
    );

    const addTicket = useCallback(
        (ticket: SaleTicket) => dispatch(add1Ticket(ticket)), [dispatch]
    );

    const removeTicketAux = (ticket: SaleTicket) => {
        if (ticket.quantidade === 1) {
            endTicket(ticket)
        } else {
            subTicket(ticket)
        }
    }

    const subTicket = useCallback(
        (ticket: SaleTicket) => dispatch(remove1Ticket(ticket)), [dispatch]
    );

    const endTicket = useCallback(
        (ticket: SaleTicket) => dispatch(removeTicket(ticket)), [dispatch]
    );



    return (
        <div className={styles['container']}>
            <Text>Carrinho</Text>

            <div>
                {
                    (cart.acompanhamentos.length === 0 && cart.ingressos.length === 0) &&
                    <div className={styles['cart_empty']}>
                        <Detail fontWeight={300}>O carrinho está vazio...</Detail>
                    </div>
                }
                {
                    cart.acompanhamentos.map((a) => {
                        return <CartItemCard
                            subtitle={a.nome}
                            text={a.tamanho}
                            rightSubtitle={`R$ ${a.precoUnidade}`}
                            qntd={a.quantidade}
                            add={() => { addProduct(a) }}
                            remove={() => { removeProductAux(a) }}
                        />

                    })
                }
                {
                    cart.ingressos.map((a) => {
                        return <CartItemCard
                            subtitle={a.filme}
                            text={`Sala ${a.numeroSalaSessao}`}
                            rightSubtitle={`R$ ${a.precoInteira}`}
                            qntd={a.quantidade}
                            add={() => { addTicket(a) }}
                            remove={() => { removeTicketAux(a) }}
                        />

                    })
                }
            </div>
        </div>
    );
}

export default ProductsCart;