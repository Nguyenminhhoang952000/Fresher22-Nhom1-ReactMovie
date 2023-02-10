import tmdbApi from 'api/tmdbApi';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './CardSearch.module.scss';
const cx = classNames.bind(styles);
function CardPeople({ data }) {
    return (
        <div className={cx('wrapper-people')}>
            <div className={cx('people_image')}>
                <Link
                    to={`/person/${tmdbApi.LinkOverViewMovie(
                        data.id,
                        data.original_title || data.title || data.name || data.original_name,
                    )}`}
                >
                    <img
                        src={
                            data.profile_path
                                ? `https://www.themoviedb.org/t/p/w94_and_h141_bestv2/${data?.profile_path}`
                                : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'
                        }
                        alt="imge"
                    />
                </Link>
            </div>
            <div className={cx('people_details')}>
                <div className={cx('people_title')}>
                    <Link
                        to={`/person/${tmdbApi.LinkOverViewMovie(
                            data.id,
                            data.original_title || data.title || data.name || data.original_name,
                        )}`}
                    >
                        <h2>{data?.name || data?.original_name}</h2>
                    </Link>
                </div>
                <div className={cx('people_overview')}>
                    <span>Acting.</span>
                    <Link
                        to={`/person/${tmdbApi.LinkOverViewMovie(
                            data.id,
                            data.original_title || data.title || data.name || data.original_name,
                        )}`}
                    >
                        <span>
                            {data?.known_for?.length >= 1 &&
                                (data?.known_for[0]?.title || data?.known_for[0]?.original_title)}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CardPeople;
