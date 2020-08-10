import React from 'react';

import confLogo from '../../images/badge-header.svg';
import './styles/stylesBadge.css';

export const Badge = ({ firstName, lastName, jobTitle, social, avatarUrl }) => {

    return (
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia" />
            </div>

            <div className="Badge__section-name">
                <img className="Badge__avatar" src={avatarUrl} alt="Avatar" />
                <h1>{firstName} <br /> {lastName} </h1>
            </div>

            <div className="Badge__section-info">
                <h3>{jobTitle}</h3>
                <div>{social}</div>
            </div>

            <div className="Badge__footer">
                #platziconf
            </div>
        </div>
    )
}
