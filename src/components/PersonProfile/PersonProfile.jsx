import React from 'react';
import classNames from 'classnames/bind';
import { FaKeyboard } from 'react-icons/fa';
import { MdOutlineReport } from 'react-icons/md';
import { RiArrowDownSFill } from 'react-icons/ri';
import { MenuAll, MenuDepartment } from 'components/Menu/MenuNav';
import PersonalListMovie from 'components/PersonalListMovie/PersonalListMovie';
import styles from './PersonProfile.module.scss';
import PersonalMovie from 'components/PersonalMovie/PersonalMovie';
import Information from './Information';

const cx = classNames.bind(styles);
const PersonProfile = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contents')}>
                <div className={cx('personalInformation')}>
                    <img
                        src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/oTB9vGIBacH5aQNS0pUM74QSWuf.jpg"
                        alt=""
                        className={cx('img')}
                    />
                    <div className={cx('personalInfor')}>
                        <section>
                            <h3 className={cx('titleInfor')}>Personal Info</h3>
                            <section>
                                <Information bbi="Known For" info="Acting" />
                                <Information bbi="Known Credits" info="188" />
                                <Information bbi="Gender" info="male" />
                                <Information bbi="Birthday" info="1963-12-18 (59 years old)" />
                                <Information bbi="Place of Birth" info=" Shawnee, Oklahoma, USA" />
                                <Information bbi="Also Known As" info="William Bradley Pitt" />
                            </section>
                            <div className={cx('theDiv')}>
                                <button className={cx('btnEdit')}>EDIT PAGE</button>
                            </div>
                            <div className={cx('theDiv')}>
                                <FaKeyboard />
                                <p className={cx('text')}>Keyboard Shortcuts</p>
                            </div>
                            <div className={cx('theDiv')}>
                                <MdOutlineReport />
                                <p className={cx('text')}>Report an Issue</p>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={cx('personalWrapper')}>
                    <div className={cx('personalProfile')}>
                        <h2 className={cx('titleName')}>Brad Pitt</h2>
                        <section className={cx('personalProfileContent')}>
                            <h3>Biography</h3>
                            <span>
                                William Bradley Pitt (born December 18, 1963) is an American actor and film producer. He
                                is the recipient of various accolades, including an Academy Award, a British Academy
                                Film Award, and two Golden Globe Awards for his acting, in addition to a second Academy
                                Award, a second British Academy Film Award, a third Golden Globe Award, and a Primetime
                                Emmy Award as a producer under his production company, Plan B Entertainment.
                            </span>
                        </section>
                        <section className={cx('personalProfileContent')}>
                            <h3>Known For</h3>
                            <div className={cx('personalListMovie')}>
                                <PersonalMovie />
                                <PersonalMovie />
                                <PersonalMovie />
                                <PersonalMovie />
                                <PersonalMovie />
                                <PersonalMovie />
                                <PersonalMovie />
                                <PersonalMovie />
                                <PersonalMovie />
                                <PersonalMovie />
                            </div>
                        </section>
                        <section className={cx('personalProfileContent')}>
                            <div className={cx('creditsList')}>
                                <PersonalListMovie title="Acting" />
                            </div>
                            <div className={cx('creditsFilters')}>
                                <div className={cx('listFiters')}>
                                    <span style={{ color: '#01b4e4', display: 'none' }}>Clear</span>
                                </div>
                                <div className={cx('listFiters')}>
                                    <span>All</span>
                                    <RiArrowDownSFill />
                                    <MenuAll />
                                </div>
                                <div className={cx('listFiters')}>
                                    <span>Department</span>
                                    <RiArrowDownSFill />
                                    <MenuDepartment />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonProfile;
