import tmdbApi from 'api/tmdbApi';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './CardSearch.module.scss';
const cx = classNames.bind(styles);
function CardMovie({ data, name }) {
    return (
        <div className={cx('wrapper-movie')}>
            <div className={cx('movie_image')}>
                <Link
                    to={`/${name}/${tmdbApi.LinkOverViewMovie(
                        data.id,
                        data.original_title || data.title || data.name || data.original_name,
                    )}`}
                >
                    <img
                        src={
                            data?.backdrop_path || data?.poster_path
                                ? `https://www.themoviedb.org/t/p/w94_and_h141_bestv2/${
                                      data?.backdrop_path || data?.poster_path
                                  }`
                                : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
                        }
                        alt="imge"
                    />
                </Link>
            </div>
            <div className={cx('movie_details')}>
                <div className={cx('details_title')}>
                    <Link
                        to={`/${name}/${tmdbApi.LinkOverViewMovie(
                            data?.id,
                            data.original_title || data.title || data.name || data.original_name,
                        )}`}
                    >
                        <h2>{data?.title || data?.original_title || data?.name || data?.original_name}</h2>
                    </Link>
                    <span className={cx('details_date')}>{data?.release_date || data?.first_air_date}</span>
                </div>
                <div className={cx('details_overview')}>
                    <p>{data?.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default CardMovie;
