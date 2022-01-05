import React from 'react';

import { Colors } from '../../../theme/colors';

import { Text } from '../../atoms';

import OutlineCardProps from './outline_card_props';

import styles from './outline_card_style.module.scss';


const OutlineCard: React.FC<OutlineCardProps> = ({ leftText, middleText, rightText }) => {
    return (
        <div className={styles['container']}>
            <div className={styles['left_container']}>
                <Text color={Colors.red} fontWeight={600}>{leftText}</Text>
            </div>

            <div className={styles['right_container']}>
                <Text color={Colors.red} fontWeight={400}>{middleText}</Text>
                <Text color={Colors.red} fontWeight={600}>{rightText}</Text>
            </div>
        </div>
    );
}

export default OutlineCard;