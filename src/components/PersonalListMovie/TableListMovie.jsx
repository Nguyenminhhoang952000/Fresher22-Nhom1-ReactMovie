import React from 'react';
import ItemTableMovie from './ItemTableMovie';
import styles from './PersonalListMovie.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const TableListMovie = () => {
    return (
        <div className={cx('credit_group')}>
            <ItemTableMovie />
            <ItemTableMovie />
        </div>
    );
};

export default TableListMovie;
