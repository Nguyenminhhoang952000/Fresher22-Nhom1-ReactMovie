import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import CardFilm from 'components/CardFilm/CardFilm';
import TabMain from 'components/Tab/TabMain';
import tmdbApi, { category } from 'api/tmdbApi';
import styles from './Home.module.scss';
import HeaderStyle from 'components/HeaderStyle/HeaderStyle';

const cx = classNames.bind(styles);

function ListFilm({ title, cate, type, titleButton }) {
    const [isDataDay, setIsDataDay] = useState([]);
    const [isDataThisWeek, setIsDataThisWeek] = useState([]);
    const fetch = async (cat) => {
        try {
            let responseFirst = {};
            let responseLast = {};
            if (type === 'trending') {
                responseFirst = await tmdbApi.trending(cat, 'day');
                responseLast = await tmdbApi.trending(cat, 'week');
            } else if (type === 'popular') {
                const params = { page: 1 };
                responseFirst = await tmdbApi.getMoviesList('popular', params);
                responseLast = await tmdbApi.getTvList('popular', params);
            }
            setIsDataDay(responseFirst.results);
            setIsDataThisWeek(responseLast.results);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (cate === category.movie) {
            fetch('movie');
        } else {
            fetch('tv');
        }
    }, []);
    return (
        <div className={cx('trending')}>
            <TabMain
                header={title}
                border="hasBorder"
                themeTab="activeTabDark"
                list={[
                    {
                        title: <HeaderStyle title={titleButton?.today} />,
                        content: (
                            <div className={cx('trending__content')}>
                                {isDataDay.length === 0 ? (
                                    ''
                                ) : (
                                    <CardFilm cate={cate.length > 0 && cate} size="small" list={isDataDay} small />
                                )}
                                <div className={cx('shadow')}></div>
                            </div>
                        ),
                    },
                    {
                        title: <HeaderStyle title={titleButton?.week} />,
                        content: (
                            <div className={cx('trending__content')}>
                                {isDataThisWeek.length === 0 ? (
                                    ''
                                ) : (
                                    <CardFilm size="small" list={isDataThisWeek} cate={cate.length > 0 && cate} small />
                                )}
                                <div className={cx('shadow')}></div>
                            </div>
                        ),
                    },
                ]}
            />
        </div>
    );
}

export default ListFilm;
