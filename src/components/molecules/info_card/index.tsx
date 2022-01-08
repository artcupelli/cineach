import React from 'react';

import { Colors } from '../../../theme/colors';

import { Subtitle, Text } from '../../atoms';

import InfoCardProps from './info_card_props';

import styles from './info_card_style.module.scss'


const InfoCard: React.FC<InfoCardProps> = ({ info, description }) => {
    return (
        <div className={styles['container']}>
            <Subtitle color={Colors.red}>{info}</Subtitle>
            <Text>{description}</Text>
        </div>
    );
}

export default InfoCard;