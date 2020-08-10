import React from 'react';

import './styles/BadgeList.css';
import { Link } from 'react-router-dom';

export const BadgeList = (props) => {
    return (
        <ul className="list-unstyled">
            {
                props.badges.map((badge) => {
                    return (
                        <Link key={badge._id} to={`/badges/${badge._id}`}>
                            <li >
                                <div className="d-flex align-items-center">
                                    <div>
                                        <img src="https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon" alt="avatar" className="avatar" />
                                    </div>
                                    <div className="ml-3">
                                        <b className="font-weight-bold">
                                            {badge.name}
                                        </b>
                                        <div>
                                            @{badge.twitter}
                                        </div>
                                        <p>
                                            {badge.job}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    )
                })
            }
        </ul>
    )
}

