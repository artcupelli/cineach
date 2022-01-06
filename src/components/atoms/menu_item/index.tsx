import React from 'react';

import Icon from '@mdi/react';

import MenuItemProps from './menu_item_props';

import styles from './menu_item_style.module.scss';

import { Colors } from '../../../theme/colors';

import { Link } from 'react-router-dom';


const MenuItem: React.FC<MenuItemProps> = ({ icon, selected = false, onPress = () => { }, route }) => {

    return (

        <Link to={route ?? "*"}>
            <div
                className={styles[selected ? 'container_selected' : 'container']}
                onClick={() => { onPress(route) }}
            >
                <Icon
                    path={icon}
                    color={selected ? Colors.red : Colors.white}
                    size={1.2}
                />

            </div>
        </Link>
    );
}

export default MenuItem;