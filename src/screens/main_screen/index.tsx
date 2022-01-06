import React from 'react';

import { Menu } from '../../components/molecules';

import { Cart } from '../../components/organisms';

import LoggedRoutes from '../../routes/logged_routes';

import styles from './main_screen_style.module.scss';



const MainScreen: React.FC = () => {
    return (

        <div className={styles['screen']}>
            <div className={styles['container']}>


                <div className={styles['left_empty_space']}>
                    <Menu />
                </div>


                <div className={styles['routes_container']}>
                    <LoggedRoutes />
                </div>

                <div className={styles['right_empty_space']}>
                    <Cart />
                </div>

            </div>
        </div>

    );
}


export default MainScreen;