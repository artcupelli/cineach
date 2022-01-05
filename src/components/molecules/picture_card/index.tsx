import Icon from '@mdi/react';

import React from 'react';

import { Colors } from '../../../theme/colors';

import { Subtitle, Text } from '../../atoms';

import PictureCardProps from './picture_card_props';

import styles from './picture_card_styles.module.scss';

import { Icons } from '../../../theme/icons';


const PictureCard: React.FC<PictureCardProps> = ({ description, title, pictureUrl, animation = true }) => {
    return (
        <div
            className={styles['container']}
            style={{ backgroundImage: 'url(' + pictureUrl + ')' }}
        >
            <div className={styles['gradient_container']}>
                <div className={styles['add_container']}>
                    <Icon path={Icons.add} size={2} color={Colors. white}/>
                </div>

                <div className={styles['text_container']}>
                    <Subtitle color={Colors.white}>{title}</Subtitle>
                    <Text>{description}</Text>
                </div>
            </div>
        </div>
    );
}

export default PictureCard;