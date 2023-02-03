import React from 'react';
import classNames from 'classnames/bind';
import styles from './PersonalListMovie.module.scss';
import TableListMovie from './TableListMovie';
const cx = classNames.bind(styles);
const PersonalListMovie = ({ title }) => {
    return (
        <>
            <h3>{title}</h3>
            <div className={cx('wrapper')}>
                <TableListMovie />
                <TableListMovie />
            </div>
        </>
    );
};
export default PersonalListMovie;
