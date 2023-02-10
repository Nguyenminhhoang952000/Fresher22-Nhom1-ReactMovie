import tmdbApi from 'api/tmdbApi';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './CardSearch.module.scss';
const cx = classNames.bind(styles);
function CardCompanies({ data }) {
    return (
        <div className={cx('wrapper-companies')}>
            <ul className={cx('companies_list')}>
                <li>
                    <Link
                        to={`/person/${tmdbApi.LinkOverViewMovie(
                            data.id,
                            data.original_title || data.title || data.name || data.original_name,
                        )}`}
                    >
                        <div className={cx('companies_item')}>{data?.name}</div>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default CardCompanies;
