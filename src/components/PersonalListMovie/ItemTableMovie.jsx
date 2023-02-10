import classNames from 'classnames/bind';
import styles from './PersonalListMovie.module.scss';
import { BsCircle } from 'react-icons/bs';

const cx = classNames.bind(styles);
const ItemTableMovie = ({ dataItem }) => {
    return (
        <>
            <div className={cx('itemNameMovie')}>
                <p className={cx('itemYear')}>{dataItem?.release_date?.split('-')[0] || '--'}</p>
                <p className={cx('iconCircle')}>
                    <BsCircle />
                </p>
                <p>
                    <span className={cx('movieName')}>{dataItem?.title}</span>
                    &nbsp;
                    <span>{dataItem.character ? `as ${dataItem?.character}` : ''} </span>
                </p>
            </div>
        </>
    );
};
export default ItemTableMovie;
