import Icon from '@mdi/react';

import React from 'react';

import { Colors } from '../../../theme/colors';

import { Subtitle, Text } from '../../atoms';

import PictureCardProps from './picture_card_props';

import styles from './picture_card_styles.module.scss';

import { Icons } from '../../../theme/icons';

import { Tooltip } from 'evergreen-ui';


const PictureCard: React.FC<PictureCardProps> = ({ description, title, pictureUrl, animation = true, onAdd = () => { }, onDelete = () => { }, onEdit = () => { } }) => {
    return (
        <div
            className={styles[animation ? 'animation_container' : 'container']}
            style={{ backgroundImage: 'url(' + pictureUrl + ')' }}
        >
            <div className={styles['gradient_container']}>
                <div className={styles['add_container']}>
                    {
                        !animation &&
                        (
                            <>
                                <div onClick={() => { onEdit() }}>
                                    <Tooltip content="Editar filme">
                                        <Icon path={Icons.edit} size={1.2} color={Colors.white} />
                                    </Tooltip>
                                </div>
                                <div onClick={() => { onDelete() }}>
                                    <Tooltip content="Apagar filme">
                                        <Icon path={Icons.trash} size={1.2} color={Colors.white} />
                                    </Tooltip>
                                </div>
                            </>
                        )
                    }

                </div>

                <div className={styles['text_container']}>
                    <Subtitle color={Colors.white}>{title}</Subtitle>
                    <Text>{description}</Text>
                </div>
            </div>
        </div>
    );
}

export default PictureCard;