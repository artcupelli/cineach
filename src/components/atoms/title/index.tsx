import React from 'react';

import { Colors } from '../../../theme/colors';

import TitleProps from './title_props';

import styles from './title_style.module.scss';


const Title: React.FC<TitleProps> = ({ children, color = Colors.red }) => {

    return (
        <h1
            className={styles['title']}
            style={{ color: color }}
        >
            {children}
        </h1>
    );

}

export default Title;