import classNames from 'classnames/bind';
import { useRef } from 'react';
import styles from './Home.module.scss';
import InputSearch from 'components/InputSearch/InputSearch';

const cx = classNames.bind(styles);

function Introduce() {
    const welcomeImage = useRef();

    return (
        <section className={cx('inner_content')} ref={welcomeImage}>
            <div className={cx('media')}>
                <div className={cx('column_wrapper')}>
                    <div className={cx('content_wrapper')}>
                        <div className={cx('title')}>
                            <h2 className={cx('welcome')}>Welcome.</h2>
                            <h3 className={cx('description')}>
                                Millions of movies, TV shows and people to discover. Explore now.
                            </h3>
                        </div>

                        <div className={cx('search')}>
                            <div className={cx('search-block')}>
                                <InputSearch inputSearch inputSub className="search-content" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Introduce;
