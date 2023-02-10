import React from 'react';
import ItemTableMovie from './ItemTableMovie';
import styles from './PersonalListMovie.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const TableListMovie = ({ data }) => {
    console.log('data', data);
    return (
        <div className={cx('credit_group')}>
            {data?.map((item, index) => {
                return <ItemTableMovie key={index} dataItem={item} />;
            })}
        </div>
    );
};

export default TableListMovie;
