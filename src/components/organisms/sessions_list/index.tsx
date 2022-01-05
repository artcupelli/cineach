import React from 'react';

import { OutlineCard, SectionHeader } from '../../molecules';

import styles from './sessions_list_style.module.scss';

const SessionsList: React.FC = () => {
    return (
        <div className={styles['container']}>
            <SectionHeader
                title="Sessões do dia"
                description="Estes são as sessões que serão exibidas hoje."
                link="/sessions"
                linkTitle="Ver todas"
            />


            <div className={styles['sessions_container']}>
                <OutlineCard
                    leftText='Coraline (2009)'
                    middleText='Sala 01'
                    rightText='22:00'
                />
                <OutlineCard
                    leftText='Spider-Man (2019)'
                    middleText='Sala 01'
                    rightText='21:00'
                />
                <OutlineCard
                    leftText='Túmulo dos Vagalumes (1988)'
                    middleText='Sala 01'
                    rightText='14:00'
                />
                <OutlineCard
                    leftText='Coraline (2009)'
                    middleText='Sala 01'
                    rightText='22:00'
                />
                <OutlineCard
                    leftText='Spider-Man (2019)'
                    middleText='Sala 01'
                    rightText='21:00'
                />
            </div>
        </div>
    );
}

export default SessionsList;