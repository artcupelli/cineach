import React from 'react';

import { Subtitle, Text } from '../../atoms';

import HeaderProps from './header_props';

import moment from 'moment';

import styles from './header_style.module.scss';

import { Colors } from '../../../theme/colors';

import { Icons } from '../../../theme/icons';

import Icon from '@mdi/react';


const Header: React.FC<HeaderProps> = ({ title, date = false, icon = '' }) => {
    const today = moment();

    const mapMonths: { [id: number]: string } = {
        1: "Janeiro",
        2: "Fevereiro",
        3: "Março",
        4: "Abril",
        5: "Maio",
        6: "Junho",
        7: "Julho",
        8: "Agosto",
        9: "Setembro",
        10: "Outubro",
        11: "Novembro",
        12: "Dezembro"
    }

    return (
        <div className={styles['container']}>

            <div>
                <Subtitle light color={Colors.white}>{title}</Subtitle>
                {
                    date && <Text color={Colors.lightGray} fontWeight={200}>{today.get('date') + " de " + mapMonths[today.get('month') + 1]}</Text>
                }
            </div>

            {
                icon.length > 0 &&
                <div className={styles['right_container']}>
                    <Icon path={Icons.edit} size={1.2} color={Colors.lightGray} className={styles['icon']} />

                    <Icon path={Icons.add} size={1.2} color={Colors.lightGray} className={styles['icon']} />
                </div>

            }
        </div>
    );

}

export default Header;