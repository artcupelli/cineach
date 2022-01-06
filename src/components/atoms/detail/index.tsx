import DetailProps from './detail_props';

import React from 'react';

import styles from './detail_style.module.scss';

import { Colors } from '../../../theme/colors';


const Detail: React.FC<DetailProps> = ({ children, color = Colors.gray, fontWeight = 400 }) => {

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

export default Detail;