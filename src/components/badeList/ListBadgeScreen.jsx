import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import header from '../../images/badge-header.svg';
import { BadgeList } from './badgeList';
import { UserContext } from '../../context/usersContext';
import './styles/BadgeNew.css';

export const ListBadgeScreen = () => {

    const { users } = useContext(UserContext)

    const { data, loading, error } = users;

    return (
        <div>
            <div className="badges">
                <div className="BadgeNew__hero">
                    <div className="Badges__container">
                        <img src={header} alt="logo start" className="Badges_conf-logo" />
                    </div>
                </div>
            </div>
            {
                loading
                    ?
                    <>
                        <div style={{ backgroundColor: "white", padding: '1rem', margin: '10px auto', maxWidth: 500,  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.23)', borderRadius: 5 }}>
                            <div style={{ fontSize: 20, lineHeight: 2 }}>
                                <Skeleton circle={true} height={100} width={100} />
                                <Skeleton count={2} />
                            </div>
                        </div>
                        <div style={{ backgroundColor: "white", padding: '1rem', margin: '10px auto', maxWidth: 500, boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.23)', borderRadius: 5 }}>
                            <div style={{ fontSize: 20, lineHeight: 2 }}>
                                <Skeleton circle={true} height={100} width={100} />
                                <Skeleton count={2} />
                            </div>
                        </div>
                    </>
                    :
                    <>
                        {
                            error
                                ?
                                <h1>Error en algo</h1>
                                :
                                <>

                                    <div className="Badges__container">
                                        <div className="Badges__buttons">
                                            <Link to="/badges/new" className="btn btn-primary">
                                                New Badge
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="Badges__list">
                                        <div className="Badges__container">
                                            <BadgeList badges={data} />
                                        </div>
                                    </div>
                                </>
                        }
                    </>
            }
        </div>
    )
}
