import React, { useState } from 'react';

import { Detail, Subtitle, Text } from '../../atoms';

import styles from './cart_item_card_style.module.scss';

import { Colors } from '../../../theme/colors';

import Icon from '@mdi/react';

import { Icons } from '../../../theme/icons';

import CartItemCardProps from './cart_item_card_props';


const CartItemCard: React.FC<CartItemCardProps> = ({ subtitle, rightSubtitle, text, price = true }) => {

    const [qnt, setQnt] = useState<number>(1);


    return (
        <div className={styles['container']}>

            <div className={styles['right_detail']} />

            <div>
                <Text fontWeight={600} color={Colors.black}>{subtitle}</Text>
                <Detail fontWeight={400} color={Colors.gray}>{text}</Detail>
            </div>

            <div className={styles['preco']}>
                <Text color={Colors.black} fontWeight={600}>
                    {rightSubtitle}
                </Text>

            </div>

            <div className={styles['quantity_container']}>

                <div onClick={()=>{setQnt(qnt-1)}}>
                    <Icon
                        path={Icons.minus}
                        size={1.2}
                        color={Colors.white}
                        className={styles['icon']}
                    />
                </div>


                <div className={styles['quantity']}>
                    <Subtitle color={Colors.gray}>{qnt.toString()}</Subtitle>
                </div>

                <div onClick={()=>{setQnt(qnt+1)}}>
                    <Icon
                        path={Icons.add}
                        size={1.2}
                        color={Colors.white}
                        className={styles['icon']}
                    />
                </div>
            </div>

        </div>
    );
}

export default CartItemCard;