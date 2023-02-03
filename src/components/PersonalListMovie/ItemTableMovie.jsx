import classNames from 'classnames/bind';
import styles from './PersonalListMovie.module.scss';
import { BsCircle } from 'react-icons/bs';

const cx = classNames.bind(styles);
const ItemTableMovie = () => {
    return (
        <div className={cx('itemNameMovie')}>
            <p>—</p>
            <p className={cx('iconCircle')}>
                <BsCircle />
            </p>
            <p>
                <span className={cx('movieName')}>Surrounded</span>
                <span> </span>
            </p>
        </div>
    );
};
export default ItemTableMovie;
