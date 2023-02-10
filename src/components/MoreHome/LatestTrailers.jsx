import CardVideoHome from 'components/CardFilm/CardVideoHome';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import TabMain from 'components/Tab/TabMain';
import HeaderStyles from 'components/HeaderStyle/HeaderStyle';
import tmdbApi, { category } from 'api/tmdbApi';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
function LatestTrailers({ title, cate, type, titleButton }) {
    const [bgImage, setBgImage] = useState('');
    const [isDataOntv, setIsDataOntv] = useState([]);
    const [isDataInThreaters, setIsDataInThreaters] = useState([]);
    const handleHoverImage = (img) => {
        setBgImage(img);
    };
    const fetch = async (cat) => {
        try {
            let responseFirst = {};
            let responseLast = {};
            const params = { page: 1 };
            responseFirst = await tmdbApi.getTvList(cat, params);
            // responseLast = await tmdbApi.getTvList(cat, params);
            setIsDataOntv(responseFirst.results);
            setIsDataInThreaters(responseFirst.results);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (cate === category.movie) {
            fetch(type);
        } else {
            fetch(type);
        }
    }, []);
    return (
        <div
            className={cx('trailer')}
            style={{
                backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/${
                    bgImage || isDataOntv[0]?.backdrop_path || isDataOntv[0]?.poster_path
                })`,
            }}
        >
            <div className={cx('trailer__wrap')}>
                <TabMain
                    header={title}
                    border="hasBorder"
                    themeTab="activeTabLight"
                    list={[
                        {
                            title: <HeaderStyles title={titleButton?.on} />,
                            content: (
                                <div className={cx('trailer__content')}>
                                    {isDataOntv.map((item) => (
                                        <CardVideoHome key={item.id} handleHoverImage={handleHoverImage} list={item} />
                                    ))}
                                </div>
                            ),
                        },
                        {
                            title: <HeaderStyles title={titleButton?.in} />,
                            content: (
                                <div className={cx('trailer__content')}>
                                    {isDataInThreaters.map((item) => (
                                        <CardVideoHome key={item.id} handleHoverImage={handleHoverImage} list={item} />
                                    ))}
                                </div>
                            ),
                        },
                    ]}
                />
            </div>
        </div>
    );
}

export default LatestTrailers;
