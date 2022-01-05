import React from 'react';

import { Subtitle, Text } from '../../atoms';

import HeaderProps from './header_props';

import moment from 'moment';

import styles from './header_style.module.scss';

import { Colors } from '../../../theme/colors';

import YellowMonster from '../../../assets/images/yellow_monster.png';

import Icon from '@mdi/react';

import { Icons } from '../../../theme/icons';


const Header: React.FC<HeaderProps> = ({ title, outline = false, icon = Icons.product }) => {
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

    return !outline ? (
        <div className={styles['container']}>
            <Subtitle light color={Colors.white}>{title}</Subtitle>
            <Text color={Colors.lightGray} fontWeight={200}>{today.get('date') + " de " + mapMonths[today.get('month') + 1]}</Text>

            <img alt="Yellow Monster" src={YellowMonster} className={styles['image']} />
        </div>
    ) :
        (
            <div className={styles['container_outline']}>

                <div className={styles['left_container']}>
                    <Icon path={icon} size={1} color={Colors.gray} />

                    <Subtitle light color={Colors.gray}>{title}</Subtitle>
                </div>

                <div className={styles['right_container']}>
                    <Icon path={Icons.edit} size={1} color={Colors.red} className={styles['icon']} />

                    <Icon path={Icons.add} size={1} color={Colors.red} className={styles['icon']} />
                </div>
            </div>
        )
        ;

}

export default Header;