import { useOutletContext, useSearchParams } from 'react-router-dom';
import CardMovie from './CardSearch/CardMoive';
import classNames from 'classnames/bind';
import styles from './MoreSearch.module.scss';
import CardPeople from './CardSearch/CardPeople';
import CardCompanies from './CardSearch/CardCompanies';
import CardKeyword from './CardSearch/CardKeyword';
// import PaginatedItems from './CardSearch/PaginateSearch';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function ContentItem() {
    const [name, data, handlePage] = useOutletContext();
    const [searchParams] = useSearchParams();
    const params = [];
    for (let entry of searchParams.entries()) {
        params.push(entry);
    }
    let Comp = CardMovie;
    switch (name) {
        case 'person':
            Comp = CardPeople;
            break;
        case 'company':
            Comp = CardCompanies;
            break;
        case 'keyword':
            Comp = CardKeyword;
            break;
        default:
            Comp = CardMovie;
    }
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data[name]?.results?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data[name]?.total_pages / itemsPerPage));
    }, [itemOffset, itemsPerPage, data[name]?.results]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data[name]?.results?.length;
        setItemOffset(newOffset);
    };
    return (
        <div className={cx('wrapper_content')}>
            {currentItems?.length > 0 ? (
                <>
                    {currentItems.map((item) => {
                        return <Comp name={name} key={item.id} data={item} />;
                    })}
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        containerClassName="pagination"
                        pageLinkClassName="page-num"
                        previousClassName="page-num"
                        nextLinkClassName="page-num"
                        activeClassName="active"
                    />
                </>
            ) : (
                <div>{`There are no ${name} that matched your query.`}</div>
            )}
        </div>
    );
}

export default ContentItem;
