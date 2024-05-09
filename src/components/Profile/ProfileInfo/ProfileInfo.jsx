import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={style.content}>
            <div>
                <img className={style.img} src='https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg' alt='#' />
            </div>
            <div>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;