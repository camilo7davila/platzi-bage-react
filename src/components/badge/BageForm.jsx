import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';

import Api from '../../utils/api'
import { BadgeContext } from '../../context/badgeConetext';
import { useParams, useHistory } from 'react-router-dom';

export const BageForm = () => {

    const params = useParams();

    const history = useHistory()

    const { badge, setBadge } = useContext(BadgeContext)

    const { name, lastName, job, email, twitter } = badge;

    useEffect(() => {
        console.log(history);
        if (Object.keys(params).length === 0) {
            setBadge({
                name: '',
                lastName: '',
                job: '',
                email: '',
                twitter: '',
            })
        } else {
            getBadgeId();
        }

        return () => {
            setBadge({
                name: '',
                lastName: '',
                job: '',
                email: '',
                twitter: '',
            })
        }
    }, [])

    const getBadgeId = async () => {
        try {
            const { payload } = await Api.getBadgeById(params.badgeId)
            setBadge({
                name: payload.name,
                lastName: payload.lastName,
                job: payload.job,
                email: payload.email,
                twitter: payload.twitter,
            })
        } catch (error) {
            alert(error)
        }

    }

    const handleChange = (e) => {
        setBadge({
            ...badge,
            [e.target.name]: e.target.value
        })
    }

    const handleCreateBadge = async (e) => {
        e.preventDefault();
        try {
            await Api.postBadge(badge)
            Swal.fire('Success', 'Creado correctamente', 'success')
            setBadge({
                name: '',
                lastName: '',
                job: '',
                email: '',
                twitter: '',
            })
        } catch (error) {
            Swal.fire('Error', error, 'error')
        }
    }

    const handleEditBadge = async (e) => {
        e.preventDefault();
        try {
            await Api.editBadgeById(params.badgeId, badge)
            Swal.fire('Success', 'Editado correctamente', 'success');
            setTimeout(() => {
                history.replace('/badges')
            }, 1000);
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className="card" style={{ position: 'absolute', top: -100, width: '100%' }}>
            <div className="card-body" style={{ minHeight: 480, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <form>
                    <h1 style={{ marginBottom: 50 }}>New Attendant</h1>
                    <div className="form-group">
                        <input
                            onChange={handleChange}
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="FirstName"
                            value={name}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            onChange={handleChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            placeholder="LastName"
                            value={lastName}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            onChange={handleChange}
                            className="form-control"
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={email}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            onChange={handleChange}
                            className="form-control"
                            type="text"
                            name="job"
                            placeholder="Job Title"
                            value={job}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            onChange={handleChange}
                            className="form-control"
                            type="text"
                            placeholder="Twitter"
                            name="twitter"
                            value={twitter}
                        />
                    </div>
                    {
                        Object.keys(params).length === 0
                            ?
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={handleCreateBadge}
                            >
                                Save
                            </button>
                            :
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={handleEditBadge}
                            >
                                Edit
                        </button>
                    }
                </form>
            </div>
        </div>
    )
}
