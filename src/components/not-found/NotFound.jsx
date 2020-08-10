import React from 'react';

import not from '../../images/404.png';
import './styles/Notfound.css';

export const NotFound = () => {
    return (
        <div className="container__box">
            <img src={not} alt="notfound" />
        </div>
    )
}
