import Icon from '@mdi/react';

import React from 'react';

import { Colors } from '../../../theme/colors';

import { Icons } from '../../../theme/icons';

import { ProfilePic, Subtitle, Text } from '../../atoms';

import LoggedUserCardProps from './logged_user_card_props';

import styles from './logged_user_card_style.module.scss';


const LoggedUserCard: React.FC<LoggedUserCardProps> = ({ name, position }) => {
    return (
        <div className={styles['container']}>

            <div className={styles['icon_container']}>
                <Icon path={Icons.logout} size={1.2} color={Colors.red} />
            </div>

            <div className={styles['text_container']}>
                <Text fontWeight={300}>{name}</Text>
                <Text fontWeight={600}>{position}</Text>
            </div>

            <div className={styles['pic_container']}>
                <ProfilePic pictureUrl='https://i.pinimg.com/originals/8e/4b/a1/8e4ba1eed0ef14361513776aeeb7ec3c.jpg'/>
            </div>


        </div>
    );
}

export default LoggedUserCard;