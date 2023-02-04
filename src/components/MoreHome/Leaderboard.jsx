import classNames from 'classnames/bind';
import LeaderBoardItem from 'components/Chart/LeaderBoard/LeaderBoardItem';
import LeaderBoardHeader from 'components/Chart/LeaderBoard/LeaderBoardHeader';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function LeaderBoard() {
    return (
        <div className={cx('wrapper__leaderboard')}>
            <LeaderBoardHeader />
            <div className={cx('wrapper__chart')}>
                <div className={cx('chart')}>
                    <LeaderBoardItem />
                </div>
                <div className={cx('chart')}>
                    <LeaderBoardItem />
                </div>
                <div className={cx('chart')}>
                    <LeaderBoardItem />
                </div>
                <div className={cx('chart')}>
                    <LeaderBoardItem />
                </div>
                <div className={cx('chart')}>
                    <LeaderBoardItem />
                </div>
                <div className={cx('chart')}>
                    <LeaderBoardItem />
                </div>
            </div>
        </div>
    );
}

export default LeaderBoard;
