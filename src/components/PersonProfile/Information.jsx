import React from 'react';
import classNames from 'classnames/bind';
import styles from './PersonProfile.module.scss';

const cx = classNames.bind(styles);
const Information = ({ bbi, info }) => {
    const checkBbi = () => {
        if (bbi === 'Also Known As') {
            return (
                <ul>
                    {info?.map((it, index) => {
                        return (
                            <li className={cx('info_also-known')} key={index}>
                                {it}
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            return info;
        }
    };
    return (
        <div>
            <p className={cx('theP')}>
                <strong>{bbi}</strong>
                {checkBbi()}
            </p>
        </div>
    );
};

export default Information;
