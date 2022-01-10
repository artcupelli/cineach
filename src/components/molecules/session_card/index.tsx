import React, { Dispatch, useCallback, useEffect, useState } from 'react';

import { Colors } from '../../../theme/colors';

import { Subtitle, Text } from '../../atoms';

import SessionCardProps from './session_card_props';

import styles from './session_card_styles.module.scss';

import { OutlineCard } from '..';

import { Spinner } from 'evergreen-ui';

import { getSession, Session } from '../../../services/sessions_service';

import Icon from '@mdi/react';

import { Icons } from '../../../theme/icons';

import { useDispatch } from 'react-redux';

import { addTicket, SaleTicket } from '../../../store/actions/cart_actions';


const SessionCard: React.FC<SessionCardProps> = ({ title, animation = true, url, onDelete = () => { }, onEdit = () => { } }) => {

    const [isLoading, setLoading] = useState<boolean>(true);
    const [sessions, setSessions] = useState<Session[]>([]);

    useEffect(() => {
        setLoading(true);

        async function searchAll() {
            setSessions(await getSession(title) ?? []);
        }
        searchAll();

        setLoading(false);
    }, [title]);


    function formatDate(dateToFormat: string): string {
        return `${dateToFormat.substring(8, 10)}/${dateToFormat.substring(5, 7)}`;
    }

    const dispatch: Dispatch<any> = useDispatch();

    const addTicketToCart = useCallback(
        (ticket: SaleTicket) => dispatch(addTicket(ticket)), [dispatch]
    );


    const addTicketToCartAux = (s : Session) => {
        const ticket : SaleTicket = {
            dataSessao: s.data,
            filme: s.tituloFilme,
            horaInicioSessao: s.horarioInicio,
            meiaEntrada: false,
            numeroSalaSessao: s.numSala,
            quantidade: 1,
            vendaId: 0,
            id: 0,
            precoInteira: s.precoInteira
        }

        addTicketToCart(ticket);
    }


    return (
        <div className={styles['container']}>
            {isLoading ? <Spinner /> :
                <>
                    <div className={styles['picture']} style={{ backgroundImage: 'url(' + url + ')' }}>
                        <div className={styles['gradient_container']}>
                            <div className={styles['text_container']}>
                                {isLoading && <Spinner />}
                                <Subtitle color={Colors.white}>{title}</Subtitle>
                                <Text>{`Número de sessões: ${sessions.length}`}</Text>
                            </div>
                        </div>
                    </div>

                    <div className={styles['sessions_container']}>
                        <Subtitle light color={Colors.black}>{`${title}`}</Subtitle>

                        {
                            sessions.map((s) => {
                                return (
                                    <div className={styles['session_card_container']}>

                                        <OutlineCard
                                            leftText={`Sala ${s.numSala}`}
                                            middleText={`${formatDate(s.data)}, às ${s.horarioInicio.substring(0, 5)}`}
                                            rightText={`R$ ${s.precoInteira}`}
                                            onClick={() => { addTicketToCartAux(s) }}
                                        />

                                        <div className={styles['icon_container']} onClick={() => onEdit(s)}>
                                            <Icon path={Icons.edit} size={1} color={Colors.red} />
                                        </div>

                                        <div className={styles['icon_container']} onClick={() => onDelete(s)}>
                                            <Icon path={Icons.trash} size={1} color={Colors.red} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            }

        </div>
    );
}

export default SessionCard;