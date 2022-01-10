
import { Spinner } from 'evergreen-ui';

import React, { useEffect, useState } from 'react';

import { getTodaySessions, Session } from '../../../services/sessions_service';

import { OutlineCard, SectionHeader } from '../../molecules';

import styles from './sessions_list_style.module.scss';


const SessionsList: React.FC = () => {

    const [sessions, setSessions] = useState<Session[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    async function searchAll() {
        const response = await getTodaySessions();
        setSessions(response || []);
        setLoading(false);
    }

    useEffect(() => {
        searchAll();
    }, [])


    return (
        <div className={styles['container']}>
            <SectionHeader
                title="Sessões do dia"
                description="Estes são as sessões que serão exibidas hoje."
                link="/sessions"
                linkTitle="Ver todas"
            />


            <div className={styles['sessions_container']}>

                {
                    isLoading
                    ?
                    <Spinner/>
                    :
                    sessions.map((s)=>{
                        return(
                            <OutlineCard
                            leftText={s.tituloFilme}
                            middleText={`Sala ${s.numeroSala}`}
                            rightText={s.horarioInicio.substring(0,5)}
                            />
                        )
                    })
                }
               
            </div>
        </div>
    );
}

export default SessionsList;