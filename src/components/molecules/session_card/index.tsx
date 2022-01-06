import Icon from '@mdi/react';

import React from 'react';

import { Colors } from '../../../theme/colors';

import { Subtitle, Text } from '../../atoms';

import SessionCardProps from './session_card_props';

import styles from './session_card_styles.module.scss';

import { Icons } from '../../../theme/icons';

import { OutlineCard } from '..';

const SessionCard: React.FC<SessionCardProps> = ({title, pictureUrl, animation = true }) => {
    return (
        <div className={styles['container']}>
            <div className={styles['picture']} style={{ backgroundImage: 'url(' + pictureUrl + ')' }}>
                <div className={styles['gradient_container']}>
                    <div className={styles['text_container']}>
                        <Subtitle color={Colors.white}>{title}</Subtitle>
                    </div>
                </div>
            </div>
            <div className={styles['sessions_container']}>
                <Subtitle color={Colors.red}>{title}</Subtitle>
                <OutlineCard
                    leftText='3D Legendado'
                    middleText='Sala 01'
                    rightText='22:00'
                />
                <OutlineCard
                    leftText='2D Dublado'
                    middleText='Sala 01'
                    rightText='21:00'
                />
                <OutlineCard
                    leftText='4DX Dublado'
                    middleText='Sala 01'
                    rightText='14:00'
                />
                <OutlineCard
                    leftText='VIP Legendado'
                    middleText='Sala 01'
                    rightText='22:00'
                />
                <OutlineCard
                    leftText='3D Dublado'
                    middleText='Sala 01'
                    rightText='21:00'
                />
                <OutlineCard
                    leftText='3D Dublado'
                    middleText='Sala 01'
                    rightText='21:00'
                />
                <OutlineCard
                    leftText='3D Dublado'
                    middleText='Sala 01'
                    rightText='21:00'
                />
                <OutlineCard
                    leftText='VIP Legendado'
                    middleText='Sala 01'
                    rightText='22:00'
                />
                <OutlineCard
                    leftText='3D Dublado'
                    middleText='Sala 01'
                    rightText='21:00'
                />
                <OutlineCard
                    leftText='3D Dublado'
                    middleText='Sala 01'
                    rightText='21:00'
                />
                <OutlineCard
                    leftText='3D Dublado'
                    middleText='Sala 01'
                    rightText='21:00'
                />
            </div>
        </div>
    );
}

export default SessionCard;