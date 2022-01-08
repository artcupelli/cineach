import Icon from '@mdi/react';
import { Tooltip } from 'evergreen-ui';

import React from 'react';

import { Colors } from '../../../theme/colors';

import { Icons } from '../../../theme/icons';

import { Detail, Subtitle, Text } from '../../atoms';

import PersonCardProps from './person_card_props';

import styles from './person_card_style.module.scss';


const PersonCard: React.FC<PersonCardProps> = ({
    cpf,
    email,
    name,
    phone,
    position
}) => {

    return (
        <div className={styles['background']}>

            <div className={styles['container']}>

                <div className={styles['back']}>
                    <div className={styles['hole']} />

                    <div className={styles['info_container']}>

                        <Text color={Colors.red} fontWeight={600}>{name}</Text>

                        <div className={styles['info']}>
                            <Detail>CPF</Detail>
                            <Text color={Colors.darkGray}>{cpf}</Text>
                        </div>
                        <div className={styles['info']}>
                            <Detail>Email</Detail>
                            <Text color={Colors.darkGray}>{email}</Text>
                        </div>
                        <div className={styles['info']}>
                            <Detail>Telefone</Detail>
                            <Text color={Colors.darkGray}>{phone}</Text>
                        </div>
                        {
                            position &&
                            <div className={styles['info']}>
                                <Detail>Cargo</Detail>
                                <Text color={Colors.darkGray}>{position}</Text>
                            </div>
                        }


                    </div>

                    <div className={styles['icons_container']}>
                        <Tooltip content='Excluir'>
                            <Icon path={Icons.trash} color={Colors.red} size={1} className={styles['icon']} />
                        </Tooltip>
                        <Tooltip content='Editar'>
                            <Icon path={Icons.edit} color={Colors.red} size={1} className={styles['icon']} />
                        </Tooltip>
                    </div>
                </div>

                <div className={styles['front']}>

                    <div className={styles['hole']} />

                    <div className={styles['info_container']}>
                        <Subtitle light color={Colors.white}>{name}</Subtitle>
                        <Detail color={Colors.lightGray}>{cpf}</Detail>
                    </div>
                </div>
            </div>


        </div>
    );
}


export default PersonCard;