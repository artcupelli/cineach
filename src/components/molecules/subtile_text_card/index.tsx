import React from 'react';

import { Detail, Subtitle } from '../../atoms';

import SubtitleTextCardProps from './subtile_text_card_props';

import styles from './subtile_text_card_style.module.scss';

import { Colors } from '../../../theme/colors';

import Icon from '@mdi/react';

import { Icons } from '../../../theme/icons';


const SubtileTextCard: React.FC<SubtitleTextCardProps> = ({ subtitle, rightSubtitle, text, price = true }) => {
    return (
        <div className={styles['container']}>

            <div className={styles['right_detail']} />

            <div>
                <Subtitle color={Colors.darkGray} light>{subtitle}</Subtitle>
                <Detail fontWeight={400} color={Colors.gray}>{text}</Detail>
            </div>

            <div className={styles['preco']}>
                <Subtitle color={Colors.red}>
                    {rightSubtitle}
                </Subtitle>

            </div>

            <div className={styles['maisBotao']}>
                <Icon path={Icons.add} size={1.5} color={Colors.red} />
            </div>

        </div>
    );
}

export default SubtileTextCard;