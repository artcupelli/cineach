import React from 'react';

import { Menu } from '../../components/molecules';

import { Cart } from '../../components/organisms';

import LoggedRoutes from '../../routes/logged_routes';

import styles from './main_screen_style.module.scss';



const MainScreen: React.FC = () => {
    return (

        <div className={styles['screen']}>
            <div className={styles['container']}>

                <Menu />

                <div className={styles['routes_container']}>
                    <LoggedRoutes />
                </div>

                <Cart />
            </div>
        </div>

    );
}


export default MainScreen;