import Icon from '@mdi/react';

import { toaster } from 'evergreen-ui';

import React, { Dispatch, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { removeClient } from '../../../store/actions/cart_actions';

import { Colors } from '../../../theme/colors';

import { Icons } from '../../../theme/icons';

import { ProfilePic, Text } from '../../atoms';

import LoggedUserCardProps from './logged_user_card_props';

import styles from './logged_user_card_style.module.scss';


const LoggedUserCard: React.FC<LoggedUserCardProps> = ({ name, position, icon = Icons.logout, photo = true }) => {

    const dispatch: Dispatch<any> = useDispatch();

    const removeClientToCart = useCallback(
        () => dispatch(removeClient()), [dispatch]
    );

    return (
        <div className={styles['container']}>

            <div className={styles['icon_container']} onClick={() => { removeClientToCart(); toaster.success('Cliente retirado da compra!') }}>
                <Icon path={icon} size={1.2} color={Colors.red} />
            </div>

            <div className={styles['text_container']}>
                <Text fontWeight={200} color={Colors.white}>{name}</Text>
                <Text fontWeight={400}>{position}</Text>
            </div>

            {
                photo ?
                    <div className={styles['pic_container']}>
                        <ProfilePic pictureUrl='https://i.pinimg.com/originals/8e/4b/a1/8e4ba1eed0ef14361513776aeeb7ec3c.jpg' />
                    </div>
                    : null
            }

        </div>
    );
}

export default LoggedUserCard;