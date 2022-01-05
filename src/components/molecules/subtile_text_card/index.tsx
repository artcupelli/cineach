import React from 'react';

import { Subtitle, Text } from '../../atoms';

import SubtitleTextCardProps from './subtile_text_card_props';

import styles from './subtile_text_card_style.module.scss';

import { Colors } from '../../../theme/colors';


const SubtileTextCard: React.FC<SubtitleTextCardProps> = ({ rightSubtitle, subtitle, text, price = true }) => {
    return (
        <div className={styles['container']}>

            <div>
                <Subtitle color={Colors.white}>{subtitle}</Subtitle>
                <Text fontWeight={200} color={Colors.white}>{text}</Text>
            </div>

            <div>  </div>

            <div>  </div>

        </div>
    );
}

export default SubtileTextCard;