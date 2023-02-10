import classNames from 'classnames/bind';
import moment from 'moment/moment';
import tmdbApi from 'api/tmdbApi';
import apiConfig from 'api/apiConfig';
import ChartPie from 'components/Chart/ChartPie';
import styles from './CardFilm.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function CardFilm({ cate, list, small = false, medium = false }) {
    const navigate = useNavigate();
    const classes = cx('cdstl1', {
        small,
        medium,
    });

    const changeTime = (time) => {
        return moment(time).format('MMM Do YY');
    };

    // -------------------------LOCAL STORAGE-------------------------------------
    let idLocalMovies = window.localStorage.getItem('idMovies');
    if (!idLocalMovies) {
        idLocalMovies = [];
    } else {
        idLocalMovies = JSON.parse(idLocalMovies);
    }

    return (
        <>
            {list.map((item) => (
                <div className={classes} key={item.id}>
                    <div className={cx(`cdstl1`)}>
                        <div className={cx('cdstl1__image')}>
                            <div className={cx('cdstl1__wrapper')}>
                                <div
                                    className={cx('cdstl1__image')}
                                    onClick={() => {
                                        idLocalMovies = [];
                                        idLocalMovies.push(item.id);
                                        window.localStorage.setItem('idMovies', JSON.stringify(idLocalMovies));
                                        navigate(`${cate}/${tmdbApi.LinkOverViewMovie(item.id, item.original_title)}`);
                                    }}
                                >
                                    <img
                                        loading="lazy"
                                        className={cx('cdstl1__poster')}
                                        src={apiConfig.srcImgLinkDefault(item.poster_path)}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div
                                className={cx('cdstl1__options')}
                                data-id="843794"
                                data-object-id="60d1bd7ebf31f2007eddf9a9"
                                data-media-type="movie"
                                data-role="tooltip"
                            >
                                <div className={cx('cdstl1__click')} href="#">
                                    <div className={cx('cdstl1__glyphicons')}></div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('cdstl1__content')}>
                            <div className={cx('cdstl1__piechart')}>
                                <ChartPie vote_average={item.vote_average} small />
                            </div>

                            <div className={cx('cdstl1__name')}>
                                <Link to={tmdbApi.LinkOverViewMovie(item.id, item.original_title)} title={item.title}>
                                    {item.title}
                                </Link>
                            </div>
                            <p className={cx('cdstl1__time')}>{changeTime(item.release_date)}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CardFilm;
