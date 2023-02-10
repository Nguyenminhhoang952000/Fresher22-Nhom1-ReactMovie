import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaKeyboard } from 'react-icons/fa';
import { MdOutlineReport } from 'react-icons/md';
import { RiArrowDownSFill } from 'react-icons/ri';
import { BiChevronRight } from 'react-icons/bi';
import { MenuAll, MenuDepartment } from 'components/Menu/MenuNav';
import PersonalListMovie from 'components/PersonalListMovie/PersonalListMovie';
import styles from './PersonProfile.module.scss';
import classNames from 'classnames/bind';
import PersonalMovie from 'components/PersonalMovie/PersonalMovie';
import Information from './Information';
import tmdbApi from 'api/tmdbApi';
import apiConfig from 'api/apiConfig';
const cx = classNames.bind(styles);
const PersonProfile = () => {
    const [personValue, setPersonValue] = useState([]);
    const [personMovie, setPersonMovie] = useState({});
    const [personTV, setPersonTV] = useState({});
    const { id } = useParams();
    console.log('id', id);
    useEffect(() => {
        const person_id = id.split('-')[0];
        const fetchPersonProfile = async () => {
            if (id) {
                try {
                    const responsePerson = await tmdbApi.person(person_id);
                    const responseMovie = await tmdbApi.personCredits(person_id);
                    const responseTV = await tmdbApi.personCreditsTV(person_id);
                    setPersonValue(responsePerson);
                    setPersonMovie(responseMovie);
                    setPersonTV(responseTV);
                } catch (error) {
                    console.log('Failed to fetch people:', error);
                }
            }
        };
        fetchPersonProfile();
    }, [id]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contents')}>
                <div className={cx('personalInformation')}>
                    <img
                        src={apiConfig.originalImage(personValue.profile_path)}
                        alt={personValue.name}
                        className={cx('img')}
                    />
                    <div className={cx('personalInfor')}>
                        <section>
                            <h3 className={cx('titleInfor')}>Personal Info</h3>
                            <section>
                                <Information bbi="Known For" info={personValue.known_for_department} />
                                <Information bbi="Known Credits" info="188" />
                                <Information bbi="Gender" info={personValue.gender === 1 ? 'Female' : 'Male'} />
                                <Information
                                    bbi="Birthday"
                                    info={`${personValue?.birthday} ${
                                        personValue?.deathday
                                            ? ''
                                            : `(${
                                                  Number(new Date().getFullYear()) -
                                                  Number(personValue?.birthday?.split('-')[0])
                                              } years old)`
                                    }
                                    `}
                                />

                                {personValue.deathday && (
                                    <Information
                                        bbi="Day of Death"
                                        info={`${personValue?.deathday} ${
                                            !personValue?.deathday
                                                ? ''
                                                : `(${
                                                      Number(personValue?.deathday?.split('-')[0]) -
                                                      Number(personValue?.birthday?.split('-')[0])
                                                  } years old)`
                                        }
                                    `}
                                    />
                                )}
                                <Information bbi="Place of Birth" info={personValue.place_of_birth} />
                                <Information bbi="Also Known As" info={personValue.also_known_as} />
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
                        <h2 className={cx('titleName')}>{personValue.name}</h2>
                        <section className={cx('personalProfileContent')}>
                            <h3>Biography</h3>
                            <span>{personValue.biography}</span>
                            <div className={cx('readMore')}>
                                <span>Read More</span>
                                <BiChevronRight className={cx('icon')} />
                            </div>
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
                                <PersonalListMovie data={!!Object.keys(personMovie) && personMovie} />
                            </div>
                            <div className={cx('creditsFilters')}>
                                <div className={cx('listFiters')}>
                                    <span style={{ color: '#01b4e4', display: 'none' }}>Clear</span>
                                </div>
                                <div className={cx('listFiters')}>
                                    <span>All</span>
                                    <RiArrowDownSFill />
                                    <MenuAll className={cx('menu')} />
                                </div>
                                <div className={cx('listFiters')}>
                                    <span>Department</span>
                                    <RiArrowDownSFill />
                                    <MenuDepartment className={cx('menu')} />
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
