import React, { useEffect, useState } from 'react';

import { Colors } from '../../../theme/colors';

import { Subtitle, Text } from '../../atoms';

import SessionCardProps from './session_card_props';

import styles from './session_card_styles.module.scss';

import { OutlineCard } from '..';

import { getFilm } from '../../../services/films_service';

import { Spinner } from 'evergreen-ui';


const SessionCard: React.FC<SessionCardProps> = ({ title, animation = true, description, year }) => {

    const [isLoading, setLoading] = useState<boolean>(true);
    const [filmUrl, setFilmUrl] = useState<string>();

    const getFilmUrl = async () => {
        const response = await getFilm(title, year);
        setFilmUrl(response?.poster || "");
        setLoading(false);
    }

    useEffect(() => {
        getFilmUrl();
    }, [])


    return (
        <div className={styles['container']}>
            {isLoading ? <Spinner /> :
                <>
                    <div className={styles['picture']} style={{ backgroundImage: 'url(' + filmUrl + ')' }}>
                        <div className={styles['gradient_container']}>
                            <div className={styles['text_container']}>
                                {isLoading && <Spinner />}
                                <Subtitle color={Colors.white}>{title}</Subtitle>
                                <Text>{description}</Text>
                            </div>
                        </div>
                    </div>

                    <div className={styles['sessions_container']}>
                        <Subtitle light color={Colors.black}>{title + ", " + description}</Subtitle>

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
                </>
            }

        </div>
    );
}

export default SessionCard;