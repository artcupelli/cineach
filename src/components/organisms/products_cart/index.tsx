import React from 'react';

import { Text } from '../../atoms';

import { CartItemCard } from '../../molecules';

import styles from './products_cart_style.module.scss';


const ProductsCart: React.FC = () => {
    return (
        <div className={styles['container']}>
            <Text>Carrinho</Text>

            <div>
                <CartItemCard
                    subtitle='Pipoca'
                    text='500g'
                    rightSubtitle='R$ 17.90'
                />
                <CartItemCard
                    subtitle='Meia Entrada'
                    text='Coraline 17/12 22hs'
                    rightSubtitle='R$ 17.90'
                />
                <CartItemCard
                    subtitle='Pipoca'
                    text='500g'
                    rightSubtitle='R$ 17.90'
                />
                <CartItemCard
                    subtitle='Pipoca'
                    text='500g'
                    rightSubtitle='R$ 17.90'
                />

            </div>
        </div>
    );
}

export default ProductsCart;