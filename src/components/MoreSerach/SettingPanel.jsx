import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './MoreSearch.module.scss';
const cx = classNames.bind(styles);
function SettingPanel({ data, params, handleParam, searchMenu }) {
    const classes = cx('search_menu-item');
    return (
        <div className={cx('wrapper_settings')}>
            <div className={cx('settings_panel')}>
                <h3>Search Results</h3>
                <ul className={cx('search_menu')}>
                    {searchMenu.map((menu, index) => {
                        return (
                            <NavLink
                                onClick={() => {
                                    handleParam(menu.keyword);
                                }}
                                end={menu?.end}
                                key={index}
                                className={classes}
                                to={`${menu.to}?q=${params && params[1]}`}
                                style={({ isActive }) => ({
                                    background: isActive ? 'rgba(0,0,0,0.08)' : 'white',
                                })}
                            >
                                <li>
                                    <span className={cx('search_menu-title')}>{menu.title}</span>
                                    <span className={cx('search_menu-count')}>{data[menu.keyword]?.total_results}</span>
                                </li>
                            </NavLink>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SettingPanel;
