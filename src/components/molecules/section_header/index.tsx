import React from 'react';

import { Link, Text, Title } from '../../atoms';

import SectionHeaderProps from './section_header_props';

import styles from './section_header_style.module.scss';


const SectionHeader: React.FC<SectionHeaderProps> = ({ description, title, link = "", linkTitle = "" }) => {
    return (
        <div className={styles['container']}>

            <div className={styles['title_container']}>
                <Title>{title}</Title>
                <Text>{description}</Text>
            </div>

            {
                link.length > 0 ?

                    <div className={styles['link_container']}>
                        <Link url={link}>{linkTitle}</Link>
                    </div>

                    : null
            }


        </div>
    );
}

export default SectionHeader;