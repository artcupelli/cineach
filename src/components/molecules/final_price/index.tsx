import React from 'react';

import { Colors } from '../../../theme/colors';

import { Text, Title } from '../../atoms';

import FinalPriceProps from './final_price_props';

import styles from './final_price_style.module.scss';


const FinalPrice: React.FC<FinalPriceProps> = ({ price }) => {
    return (
        <div className={styles['container']}>
            <div>
                <Text color={Colors.lightGray} fontWeight={300}>Valor Total</Text>
            </div>

            <div className={styles['price_container']}>
                <Text fontWeight={600} color={Colors.lightGray}>R$</Text>
                <Title fontWeight={300} color={Colors.white}>{price.toString()}</Title>
            </div>

        </div>
    );
}

export default FinalPrice;