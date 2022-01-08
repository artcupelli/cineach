import React from 'react';

import { Dialog } from '@mui/material';

import styles from './modal_style.module.scss';

import redMonsterImage from '../../../assets/images/red_monster.png';

import ModalProps from './modal_props';

import { Subtitle } from '../../atoms';


const ModalStyled: React.FC<ModalProps> = ({ image = redMonsterImage, title, isOpen, children }) => {

    return (

        <Dialog open={isOpen} PaperProps={{ style: { backgroundColor: 'transparent', boxShadow: 'none' } }}>

            <div className={styles['modal']}>

                <div className={styles['container']}>
                    {/* <img src={image} className={styles['image']} alt="Red Monster" /> */}


                    <div className={styles['content']}>
                        {
                            title && <Subtitle light>{title}</Subtitle>
                        }
                        {
                            children
                        }
                    </div>
                </div>

            </div>


        </Dialog>

    );
}

export default ModalStyled;