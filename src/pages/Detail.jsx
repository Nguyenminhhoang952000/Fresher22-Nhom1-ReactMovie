import { BrowserRouter } from 'react-router-dom';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import MainDetail from 'components/MoreDetail/MainDetail/MainDetail';
import CredistDetail from 'components/MoreDetail/CredistDetail/CredistDetail';
import ColumnRight from 'components/MoreDetail/ColumnRight/ColumnRight';
import CurrentSeason from 'components/MoreDetail/currentSeason/CurrentSeason';
import ReviewMovie from 'components/MoreDetail/reviewMovie/ReviewMovie';
import MediaTv from 'components/MoreDetail/mediaTv/MediaTv';
import Recommendations from 'components/MoreDetail/Recommendations/Recommendations';
import Video from 'components/MoreDetail/ModalVideo/Video'

function Detail() {
    return (
        <BrowserRouter> 
            <Header />
            <MainDetail />
            <CredistDetail />
            <CurrentSeason />
            <ColumnRight />
            <ReviewMovie />
            <MediaTv />
            <Recommendations />          
            <Footer />
           
        </BrowserRouter>
    );
}

export default Detail;


