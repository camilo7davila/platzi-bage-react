import React, { useContext } from 'react'

import { Badge } from './Badge';
import header from '../../images/platziconf-logo.svg';
import { BadgeContext } from '../../context/badgeConetext';
import { BageForm } from './BageForm';
import './styles/BadgeNew.css'

export const BadgeScreen = () => {

    const { badge } = useContext(BadgeContext)

    const { name, lastName, job, twitter } = badge

    return (
        <>
            <div className="BadgeNew__hero">
                <img src={header} alt="algo" className="BadgeNew__hero-image"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge
                            firstName={name || 'First name'}
                            lastName={lastName || 'Last name'}
                            jobTitle={job || 'Electronic'}
                            social={twitter || 'twitter'}
                            avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                        />
                    </div>
                    <div className="col-6 BadgeNew__form">
                        <BageForm />
                    </div>
                </div>
            </div>
        </>
    )
}
