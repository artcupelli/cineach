import React, { useState } from 'react';

import { Menu, Modal } from '../../components/molecules';

import { Cart, SearchClientForms } from '../../components/organisms';

import LoggedRoutes from '../../routes/logged_routes';

import styles from './main_screen_style.module.scss';



const MainScreen: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
                    <Cart
                        openModalSearchCliente={()=>{setIsModalOpen(true)}}
                    />
                </div>
                
                <Modal
                    isOpen={isModalOpen}
                    title='BUSCAR CLIENTE'
                >
                    <SearchClientForms

                        closeModal={() => { setIsModalOpen(false) }}
                    />
                </Modal>

            </div>
        </div>

    );
}


export default MainScreen;