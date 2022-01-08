import React from 'react';

import { Text } from '..';

import { Colors } from '../../../theme/colors';

import ButtonProps from './button_props';

import styles from './button_style.module.scss';


const Button: React.FC<ButtonProps> = ({
    children, onClick = () => { }, inative = false, textColor = Colors.white
}) => {

    return (
        <div
            className={styles['container']}
            onClick={() => { onClick() }}
            style={inative ? {backgroundColor: Colors.lightGray } : {}}
        >
            <Text color={textColor} fontWeight={200}>{children}</Text>
        </div>
    );
}

export default Button;