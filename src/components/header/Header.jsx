import { MenuNav } from 'components/Menu/MenuNav';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import * as Icon from 'components/Icons/Icon';
import InputSearch from 'components/InputSearch/InputSearch';
import { useEffect, useState } from 'react';
import tmdbApi from 'api/tmdbApi';
import useDebounce from 'hooks/useDebounce';
const cx = classNames.bind(styles);

function Header() {
    const [active, setActive] = useState(false);
    const [valueInput, setValueInput] = useState('');
    const [valueChange, setValueChange] = useState([]);
    const [loading, setLoading] = useState(false);
    const debounceValue = useDebounce(valueInput, 1000);
    const handleChange = (value) => {
        setValueInput(value);
    };
    useEffect(() => {
        const fetchSearch = async () => {
            if (debounceValue && debounceValue.trim()) {
                const params = {
                    language: 'vi',
                    page: 1,
                    query: debounceValue.trim(),
                    include_adult: 'false',
                };
                try {
                    setLoading(true);
                    let responseFirst = {};
                    responseFirst = await tmdbApi.search('multi', { params });
                    setValueChange(responseFirst.results);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                }
            } else {
                try {
                    setLoading(true);
                    let responseFirst = {};
                    const time = 'day';
                    responseFirst = await tmdbApi.trending('all', time);
                    setValueChange(responseFirst.results);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                }
            }
        };
        fetchSearch();
    }, [debounceValue]);

    const findItem = (data, cate) => {
        return data.find((value) => {
            return value?.media_type.toLowerCase() === cate;
        });
    };
    const handleRenderTrending = () => {
        return (
            <>
                <div className={cx('search__item-header')}>
                    <InputSearch leftIcon={Icon.trendingIcon} data="Trending" className="search-header" />
                </div>
                {valueChange.length > 0 &&
                    valueChange.slice(0, 10).map((search) => {
                        return (
                            <div key={search.id} className={cx('search-item')}>
                                <InputSearch leftIcon={Icon.searchIconBlack} className="search-item" data={search} />
                            </div>
                        );
                    })}
            </>
        );
    };
    const handleRenderSearch = () => {
        const resultSearch = [];
        const searchMovie = valueChange && findItem(valueChange, 'movie');
        const searchTv = valueChange && findItem(valueChange, 'tv');
        const searchPerson = valueChange && findItem(valueChange, 'person');
        resultSearch.push(
            <>
                {searchMovie ? (
                    <div className={cx('search-item')}>
                        <InputSearch
                            leftIcon={Icon.filmIcon}
                            media_type="in Movies"
                            className="search-item"
                            data={searchMovie}
                        />
                    </div>
                ) : (
                    ''
                )}
                {searchTv ? (
                    <div className={cx('search-item')}>
                        <InputSearch
                            leftIcon={Icon.tvIcon}
                            media_type="in TV Shows"
                            className="search-item"
                            data={searchTv}
                        />
                    </div>
                ) : (
                    ''
                )}
                {searchPerson ? (
                    <div className={cx('search-item')}>
                        <InputSearch
                            leftIcon={Icon.userIcon}
                            media_type="in People"
                            className="search-item"
                            data={searchPerson}
                        />
                    </div>
                ) : (
                    ''
                )}
            </>,
        );
        const searchAll = (valueChange.length >= 10 ? valueChange.slice(0, 10) : valueChange).map((change) => {
            return (
                <div key={change.id} className={cx('search-item')}>
                    <InputSearch suggest leftIcon={Icon.searchIconBlack} className="search-item" data={change} />
                </div>
            );
        });
        return [resultSearch, ...searchAll];
    };
    const [deltaWheel, setDeltaWheel] = useState(125);
    const deltaWheelDebounce = useDebounce(deltaWheel, 100);
    useEffect(() => {
        document.onwheel = (e) => {
            setDeltaWheel(e.deltaY);
        };
    }, [deltaWheelDebounce]);
    return (
        <div
            className={cx('wrapper')}
            style={{
                animation:
                    deltaWheelDebounce > 0
                        ? 'scrollHeaderUp 0.2s linear forwards'
                        : 'scrollHeaderDown 0.2s linear forwards',
            }}
        >
            <header className={cx('header')}>
                <div className={cx('header-space')}>
                    <div className={cx('nav')}>
                        <a href="/" className={cx('link__logo')}>
                            <img
                                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                                alt="logo"
                                className={cx('logo')}
                            ></img>
                        </a>
                        <ul className={cx('nav__list')}>
                            <li className={cx('nav__item')}>
                                <span className={cx('nav__item--title')}>Movies</span>
                                <div className={cx('item__menu')}>
                                    <MenuNav />
                                </div>
                            </li>

                            <li className={cx('nav__item')}>
                                <span className={cx('nav__item--title')}>TV Shows</span>
                            </li>
                            <li className={cx('nav__item')}>
                                <span className={cx('nav__item--title')}>People</span>
                            </li>
                            <li className={cx('nav__item')}>
                                <span className={cx('nav__item--title')}>More</span>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('manipulation')}>
                        <div className={cx('icon__plus')}>
                            <i className={cx('fa-solid fa-plus')}></i>
                        </div>
                        <div className={cx('change__languages')}>
                            <span className={cx('text')}>VI</span>
                        </div>
                        <div className={cx('login')}>Login</div>
                        <div className={cx('register')}>Register TMDB</div>

                        {!active ? (
                            <div
                                onClick={() => setActive(true)}
                                className={cx('icon__search')}
                                style={{ backgroundImage: `url(${Icon.searchIcon})` }}
                            ></div>
                        ) : (
                            <div
                                onClick={() => {
                                    setActive(false);
                                    setValueChange([]);
                                }}
                                className={cx('icon__search')}
                                style={{ backgroundImage: `url(${Icon.closeIcon})`, filter: 'invert(1)' }}
                            ></div>
                        )}
                    </div>
                </div>
            </header>
            {active && (
                <div className={cx('list-search')}>
                    <div className={cx('search')}>
                        <div className={cx('search-block')}>
                            <InputSearch
                                value={valueInput}
                                onChange={handleChange}
                                inputSearch
                                leftIcon={Icon.searchIconBlack}
                                rightIcon={Icon.closeIcon}
                                loading={loading}
                            />
                        </div>
                    </div>
                    <div className={cx('search-listitem')}>
                        {!valueInput ? <>{handleRenderTrending()}</> : <>{handleRenderSearch()}</>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
