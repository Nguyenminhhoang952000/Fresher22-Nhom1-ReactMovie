import tmdbApi from 'api/tmdbApi';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './CardSearch.module.scss';
const cx = classNames.bind(styles);
function CardKeyword({ data, name }) {
    return (
        <div className={cx('wrapper-keyword')}>
            <ul className={cx('keyword_list')}>
                <li>
                    <Link
                        to={`/person/${tmdbApi.LinkOverViewMovie(
                            data.id,
                            data.original_title || data.title || data.name || data.original_name,
                        )}`}
                    >
                        <div className={cx('keyword_item')}>{data?.name}</div>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default CardKeyword;
