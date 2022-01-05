import TextProps from './text_props';

import React from 'react';

import styles from './text_style.module.scss';

import { Colors } from '../../../theme/colors';


const Text: React.FC<TextProps> = ({ children, color = Colors.gray, fontWeight = 400 }) => {

    return (
        <p
            className={styles['text']}
            style={{ 
                color: color,
                fontWeight: fontWeight
            }}
        >
            {children}
        </p>
    );

}

export default Text;