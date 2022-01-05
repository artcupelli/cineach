import React, { useState } from 'react';

import { useLocation } from 'react-router';

import { Icons } from '../../../theme/icons';

import { MenuItem } from '../../atoms';

import styles from './menu_style.module.scss';



const Menu: React.FC = () => {

    const location = useLocation();

    const [selectedMenuItem, setSelectedMenuItem] = useState<string>(location.pathname);

    function isItemSelected(route: string): boolean {
        return (selectedMenuItem === route);
    }

    return (

        <div className={styles['container']}>

            <MenuItem
                icon={Icons.home}
                onPress={setSelectedMenuItem}
                route="/"
                selected={isItemSelected("/")}
            />

            <MenuItem
                icon={Icons.product}
                onPress={setSelectedMenuItem}
                route="/products"
                selected={isItemSelected('/products')}
            />

            <MenuItem
                icon={Icons.film}
                onPress={setSelectedMenuItem}
                route="/films"
                selected={isItemSelected('/films')}
            />

            <MenuItem
                icon={Icons.session}
                onPress={setSelectedMenuItem}
                route="/sessions"
                selected={isItemSelected('/sessions')}
            />

            <MenuItem
                icon={Icons.sales}
                onPress={setSelectedMenuItem}
                route="/sales"
                selected={isItemSelected('/sales')}
            />

            <MenuItem
                icon={Icons.user}
                onPress={setSelectedMenuItem}
                route="/people"
                selected={isItemSelected('/people')}
            />

        </div>
    );
}

export default Menu;