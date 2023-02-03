import React from 'react';
import classNames from 'classnames/bind';
import styles from './PersonalMovie.module.scss';

const cx = classNames.bind(styles);
const PersonalMovie = () => {
    return (
        <div className={cx('imgMovie')}>
            <div className={cx('itemMovie')}>
                <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg" alt="" />
            </div>
            <p className={cx('titleMovie')}>Joker</p>
        </div>
    );
};

export default PersonalMovie;
