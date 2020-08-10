import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';

import Api from '../../utils/api'
import Skeleton from 'react-loading-skeleton';
import { Badge } from '../badge/Badge';
import { Modal } from '../modal/Modal';
import { UiContext } from '../../context/uiContext';

import confLogo from '../../images/platziconf-logo.svg';
import './styles/BadgeDetails.css';
import Swal from 'sweetalert2';

export const BadgeDetailsScreen = () => {

    const { badgeId } = useParams();
    const { ui, setUi } = useContext(UiContext)
    const history = useHistory();

    const [user, setUser] = useState({
        name: '',
        lastName: '',
        job: '',
        twitter: '',
        email: '',
        loading: true,
    })

    const { name, lastName, job, twitter, email } = user

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const { payload } = await Api.getBadgeById(badgeId)
                setUser({
                    name: payload.name,
                    lastName: payload.lastName,
                    job: payload.job,
                    twitter: payload.twitter,
                    email: payload.email,
                    loading: false
                })
            } catch (error) {
                alert(error)
            }
        }
        fetchApi()
        return () => {
            setUser({
                name: '',
                lastName: '',
                job: '',
                twitter: '',
                email: '',
                loading: true
            })
            setUi({
                isOpen: false
            })
        }

    }, [badgeId, setUi])

    const handleOpenModal = () => {
        setUi({
            isOpen: !ui.isOpen
        })
    }

    const handleDeleteBadge = async () => {
        try {
            await Api.deleteBadgeById(badgeId);
            history.replace('/badges')
        } catch (error) {
            Swal.fire('Error', error, 'error')
        }
    }

    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            {
                                <h1>{name || <Skeleton />} {lastName}</h1>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge
                            name={name}
                            lastName={lastName}
                            jobTitle={job}
                            twitter={twitter}
                            email={email}
                            avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <Link
                                    to={`/badges/${badgeId}/edit`}
                                    className="btn btn-success mb-4"
                                >
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <button
                                    className="btn btn-danger"
                                    onClick={handleOpenModal}
                                >
                                    Delete
                                </button>
                                <Modal>
                                    <h1>Are You Sure?</h1>
                                    <p>You are about to delete this badge.</p>
                                    <div>
                                        <button
                                            className="btn btn-danger mr-4"
                                            onClick={handleDeleteBadge}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="btn btn-primary"
                                            onClick={handleOpenModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
