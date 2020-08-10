import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Redirect,
} from "react-router-dom";

import { BadgeScreen } from '../components/badge/BadgeScreen.jsx';
import { ListBadgeScreen } from '../components/badeList/ListBadgeScreen.jsx';
import { Navbar } from '../components/ui/Navbar.jsx';
import { NotFound } from '../components/not-found/NotFound.jsx';
import { HomeScreen } from '../components/home/HomeScreen.jsx';
import { BadgeDetailsScreen } from '../components/badge-detail/BadgeDetailsScreen.jsx';

export const RouterApp = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/badges" component={ListBadgeScreen} />
                    <Route exact path="/badges/new" component={BadgeScreen} />
                    <Route exact path="/badges/:badgeId" component={BadgeDetailsScreen} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgeScreen} />
                    <Route exact path="/" component={HomeScreen} />
                    <Route component={NotFound} />
                    {/* <Redirect to="/" /> */}
                </Switch>
            </div>
        </Router>
    )
}
