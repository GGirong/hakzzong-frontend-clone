import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    withRouter,
    Switch,
} from 'react-router-dom';

import { MainView } from 'Views';

const MainRoutesWithRouter = withRouter(router => (
    <>
        <Switch>
            <Route component={MainView} path="/" />
        </Switch>
    </>
));

export const MainRoutes = () => {
    return (
        <Router>
            <MainRoutesWithRouter />
        </Router>
    );
};
