import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './PersonalListMovie.module.scss';
import TableListMovie from './TableListMovie';
const cx = classNames.bind(styles);
const PersonalListMovie = ({ data }) => {
    // Sort Year

    const yearRelease = data?.cast?.filter((item) => item?.release_date !== '');
    const unYearRelease = data ? data?.cast?.filter((item) => item.release_date === '') : [];
    console.log(unYearRelease);
    yearRelease?.sort(function (a, b) {
        return b?.release_date.split('-')[0] - a?.release_date.split('-')[0];
    });
    console.log(yearRelease);
    // Chia cac nam giong nhau vao thanh 1 mang 2 chieu [[],[]...]
    const result = [];
    for (let i = 0; i < yearRelease?.length - 1; i++) {
        const sameYear = [];
        sameYear.push(yearRelease[i]);
        for (let j = i + 1; j < yearRelease?.length; j++) {
            if (yearRelease[i]?.release_date.split('-')[0] === yearRelease[j]?.release_date.split('-')[0]) {
                sameYear.push(yearRelease[j]);
                i = j;
            }
        }
        result.push(sameYear);
    }
    result.unshift(unYearRelease);
    console.log('result', result);
    return (
        <>
            <h3>Acting</h3>
            <div className={cx('wrapper')}>
                {result?.map((resultITem, index) => {
                    return (
                        <>
                            {resultITem?.length > 0 ? (
                                <div className={cx('content')}>
                                    <TableListMovie key={index} data={resultITem} />
                                </div>
                            ) : (
                                ''
                            )}
                        </>
                    );
                })}
            </div>
        </>
    );
};
export default PersonalListMovie;
