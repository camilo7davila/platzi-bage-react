import React, { useState, useEffect } from 'react';
import { UserContext } from './context/usersContext';

import { RouterApp } from './routers/RouterApp';
import { BadgeContext } from './context/badgeConetext';
import Api from './utils/api'
import "bootstrap/dist/css/bootstrap.css";
import "./global.css"
import { UiContext } from './context/uiContext';

export const BadgeApp = () => {

    const [badge, setBadge] = useState({
        name: '',
        lastName: '',
        job: '',
        email: '',
        twitter: '',
    })

    const [users, setUsers] = useState({
        loading: true,
        error: false,
        data: undefined,
    })

    const [ui, setUi] = useState({
        isOpen: false
    })

    useEffect(() => {
        fetchMyApi()
    }, [])

    const fetchMyApi = async () => {
        try {
            const api = await Api.getCharacters()
            setUsers({
                ...users,
                data: api.payload,
                loading: false,
            })
        } catch (error) {
            setUsers({
                ...users,
                loading: false,
                error: true
            })
        }
    }

    return (
        <BadgeContext.Provider
            value={{
                badge,
                setBadge
            }}
        >
            <UserContext.Provider
                value={{
                    users,
                    setUsers
                }}
            >
                <UiContext.Provider
                    value={{
                        ui,
                        setUi
                    }}
                >
                    <RouterApp />
                </UiContext.Provider>
            </UserContext.Provider>
        </BadgeContext.Provider>
    )
}
