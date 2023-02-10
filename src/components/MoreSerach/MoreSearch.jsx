import classNames from 'classnames/bind';
import styles from './MoreSearch.module.scss';
import SettingPanel from './SettingPanel';
import { useSearchParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import tmdbApi from 'api/tmdbApi';
const cx = classNames.bind(styles);
function MoreSearch() {
    const searchMenu = [
        {
            title: 'Movies',
            count: 95,
            to: '/search/movie',
            end: true,
            keyword: 'movie',
        },
        {
            title: 'TV Shows',
            count: 3,
            to: '/search/tv',
            keyword: 'tv',
        },
        {
            title: 'People',
            count: 94,
            to: '/search/person',
            keyword: 'person',
        },
        {
            title: 'Keywords',
            count: 0,
            to: '/search/keyword',
            keyword: 'keyword',
        },
        {
            title: 'Collections',
            count: 0,
            to: '/search/collection',
            keyword: 'collection',
        },

        {
            title: 'Companies',
            count: 1,
            to: '/search/company',
            keyword: 'company',
        },
        {
            title: 'Networks',
            count: 0,
            to: '/search/network',
            keyword: 'network',
        },
    ];
    const [searchParams] = useSearchParams();
    const [titleParam, setTitleParam] = useState('movie');
    const [queryParam, setQueryParam] = useState([]);
    const [dataSearch, setDataSearch] = useState({
        movie: {},
        tv: {},
        collection: {},
        keyword: {},
        person: {},
        company: {},
    });
    const [page, setPage] = useState(1);
    const handlePage = (value) => {
        setPage(value);
    };
    useEffect(() => {
        const params = [];
        for (let entry of searchParams.entries()) {
            params.push(entry);
        }
        setQueryParam(params[0]);
    }, [searchParams]);
    useEffect(() => {
        try {
            if (queryParam.length >= 2) {
                const params = {
                    language: 'en-US',
                    page: page,
                    query: queryParam[1],
                    include_adult: 'false',
                };
                const fetch = async () => {
                    const responMovie = await tmdbApi.search('movie', { params });
                    const responTv = await tmdbApi.search('tv', { params });
                    const responCol = await tmdbApi.search('collection', { params });
                    const responKey = await tmdbApi.search('keyword', { params });
                    const responPerson = await tmdbApi.search('person', { params });
                    const responCompany = await tmdbApi.search('company', { params });
                    setDataSearch({
                        movie: responMovie,
                        tv: responTv,
                        collection: responCol,
                        keyword: responKey,
                        person: responPerson,
                        company: responCompany,
                    });
                };
                fetch();
            }
        } catch (error) {
            console.log(error);
        }
    }, [queryParam[1], page]);
    const handleParam = (value) => {
        setTitleParam(value);
    };

    return (
        <div className={cx('wrapper')}>
            <SettingPanel data={dataSearch} params={queryParam} handleParam={handleParam} searchMenu={searchMenu} />
            <div className={cx('content__list')}>
                <Outlet context={[titleParam, dataSearch, handlePage]} />
            </div>
        </div>
    );
}

export default MoreSearch;
