import React from 'react';

import ProfilePicProps from './profile_pic_props';

import styles from './profile_pic_styles.module.scss';


const ProfilePic: React.FC<ProfilePicProps> = ({pictureUrl}) => {
    return (
        <div
            className={styles['container']}
            style={{ backgroundImage: 'url(' + pictureUrl + ')' }}
        />
    );
}

export default ProfilePic;