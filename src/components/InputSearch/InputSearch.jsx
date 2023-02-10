import classNames from 'classnames/bind';
import { useNavigate, createSearchParams } from 'react-router-dom';
import styles from './InputSearch.module.scss';
const cx = classNames.bind(styles);

function InputSearch({
    loading,
    suggest,
    media_type,
    value,
    onChange,
    data,
    leftIcon,
    rightIcon,
    inputSearch,
    inputSub,
    className,
}) {
    const navigate = useNavigate();
    const handleChange = (e) => {
        if (!e.target.value.startsWith(' ') && e.target.value !== value && !inputSub) {
            onChange(e.target.value);
        }
    };
    const hanldeEnterSearch = (e) => {
        if (e.keyCode === 13) {
            navigate({
                pathname: `search/movie`,
                search: createSearchParams({
                    q: e.target.value,
                }).toString(),
            });
        }
    };
    return (
        <div className={cx('wrapper', className)}>
            {leftIcon && (
                <div className={cx('search__icon--left')} style={{ backgroundImage: `url(${leftIcon})` }}></div>
            )}
            {inputSearch && (
                <input
                    value={value}
                    onChange={handleChange}
                    autoFocus
                    onKeyUp={hanldeEnterSearch}
                    className={cx('input__search')}
                    type="text"
                    placeholder="Search for a movie, tv show, person..."
                />
            )}
            {data && (
                <span style={suggest && { opacity: 0.4 }} className={cx('text-search')}>
                    {data.title || data.name || data}
                </span>
            )}
            {data && media_type && <span style={{ opacity: 0.4, fontWeight: 200 }}>&nbsp;{`${media_type}`}</span>}
            {rightIcon && !loading && (
                <div
                    onClick={() => onChange('')}
                    className={cx('search__icon--right')}
                    style={{ backgroundImage: `url(${rightIcon})` }}
                ></div>
            )}
            {loading && <span className={cx('k-i-loading')}></span>}
            {inputSub && <input type="submit" value="Search" />}
        </div>
    );
}

export default InputSearch;
