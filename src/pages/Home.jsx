import Introduce from 'components/MoreHome/Introduce';
import TheBestMovie from 'components/MoreHome/TheBest';
import ListFilm from 'components/MoreHome/ListFilm';
import LatestTrailers from 'components/MoreHome/LatestTrailers';
import { category, tvType } from 'api/tmdbApi';
import LeaderBoard from 'components/MoreHome/Leaderboard';

function Home() {
    return (
        <div>
            <Introduce />
            <TheBestMovie />
            <div>
                <ListFilm
                    title="Trending"
                    cate="movie"
                    type="trending"
                    titleButton={{ today: 'Today', week: 'This Week' }}
                />
                <LatestTrailers
                    title="Latest Trailers"
                    cate={category.tv}
                    type={tvType.on_the_air}
                    titleButton={{ on: 'On TV', in: 'In Theaters' }}
                />
                <ListFilm
                    title="What's Popular"
                    cate="movie"
                    type="popular"
                    titleButton={{ today: 'On TV', week: 'In Theaters' }}
                />
                <LeaderBoard />
            </div>
        </div>
    );
}

export default Home;
