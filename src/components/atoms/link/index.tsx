import React from 'react';

import LinkProps from './link_props';

import styles from './link_style.module.scss';


const Link: React.FC<LinkProps> = ({ children, url }) => {
    return (
        <>
            <a href={url} className={styles['anchor']}>{children + " >"}</a>
        </>
    )
}

export default Link;