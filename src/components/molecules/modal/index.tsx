import React from 'react';

import styles from './modal_style.module.scss';

import redMonsterImage from '../../../assets/images/red_monster.png';

import ModalProps from './modal_props';

import { Dialog } from 'evergreen-ui';


const ModalStyled: React.FC<ModalProps> = ({ image = redMonsterImage, title, isOpen, children, close = () => { } }) => {

    return (

        <Dialog isShown={isOpen} hasFooter={false} title={title} onCloseComplete={() => { close(); }} >


            <div className={styles['content']}>

                {
                    children
                }
            </div>


        </Dialog>

    );
}

export default ModalStyled;