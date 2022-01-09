import { Spinner } from 'evergreen-ui';

import React, { useEffect, useState } from 'react';

import { Header } from '../../components/molecules';

import SessionCard from "../../components/molecules/session_card";

import { ModalAddSession } from '../../components/organisms';

import { getAllSessions, Session } from '../../services/sessions_service';

import { Icons } from '../../theme/icons';

import styles from './sessions_screen_style.module.scss';


const SessionScreen: React.FC = () => {

  const [sessions, setSessions] = useState<Session[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  async function searchAll() {
    const response = await getAllSessions();
    setSessions(response || []);
    setLoading(false);
  }

  useEffect(() => {
    searchAll();
  }, []);

  function formatDate(dateToFormat: string): string {
    const date = new Date(dateToFormat);
    return `${date.getDate()}/${date.getMonth()}`;
  }

  return (

    <div className={styles['container']}>


      <Header
        title='Sessões'
        icon={Icons.session}
      />

      <ModalAddSession
        isOpen={true}
      />

      <div className={styles['sessions_container']}>
        {
          isLoading
            ?
            <Spinner />
            :
            sessions.map((s) => {
              return (
                <SessionCard
                  title={s.tituloFilme}
                  description={`${formatDate(s.data)} às ${s.horarioInicio.substring(0, 5)}   Sala ${s.numSala}`}
                  year={s.anoFilme}
                />
              )
            })
        }


      </div>

    </div>
  );
}

export default SessionScreen;