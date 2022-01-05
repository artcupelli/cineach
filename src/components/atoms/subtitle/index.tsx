import React from 'react';

import { Colors } from '../../../theme/colors';

import SubtitleProps from './subtitle_props';

import styles from './subtitle_style.module.scss';


const Subtitle: React.FC<SubtitleProps> = ({ children, color = Colors.gray, light = false }) => {

    return (
        <h2
            className={styles['subtitle']}
            style={{
                color: color,
                fontWeight: light ? 300 : 500
            }}
        >
            {children}
        </h2>
    );

}


export default Subtitle;