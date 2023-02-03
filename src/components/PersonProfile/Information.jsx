import React from 'react';
import classNames from 'classnames/bind';
import styles from './PersonProfile.module.scss';

const cx = classNames.bind(styles);
const Information = ({ bbi, info }) => {
    return (
        <div>
            <p className={cx('theP')}>
                <strong>{bbi}</strong>
                {info}
            </p>
        </div>
    );
};

export default Information;
