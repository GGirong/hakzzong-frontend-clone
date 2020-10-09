import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    withRouter,
    Switch,
} from 'react-router-dom';

import {
    MainView,
    MissionDetailView,
    MissionListView,
    MissionTutorialView,
    PointsWithdrawalCreateView,
    StudySubjectCreateSuccessView,
    StudySubjectCreateView,
    StudySubjectDetailView,
    ConceptCreateView,
    ConceptDetailView,
} from 'Views';

import { AppContext } from 'Contexts/AppContext';

import { Header } from 'Components/Header';

export const MainRoutesWithRouter = withRouter(router => {
    const {
        state: { user },
    } = useContext(AppContext);

    return (
        <Switch>
            <Route component={MainView} exact path="/" />
            {/* {user.username ? ( */}
            <>
                <Route
                    component={MissionDetailView}
                    exact
                    path="/missions/:id/"
                />
                <Route
                    component={MissionTutorialView}
                    exact
                    path="/missions/tutorial/"
                />
                <Route component={MissionListView} exact path="/missions/" />

                <Route
                    component={PointsWithdrawalCreateView}
                    exact
                    path="/point-withdrawals/create/"
                />

                <Route
                    component={StudySubjectCreateSuccessView}
                    exact
                    path="/study-subjects/complete/"
                />
                <Route
                    component={StudySubjectCreateView}
                    exact
                    path="/study-subjects/create/"
                />
                <Route
                    component={StudySubjectDetailView}
                    exact
                    path="/study-subjects/:id/"
                />

                <Route
                    component={ConceptCreateView}
                    exact
                    path="/concepts/create/"
                />
                <Route
                    component={ConceptDetailView}
                    exact
                    path="/concepts/:id/"
                />
            </>
            {/* ) : (
                <>
                    <Route path="/">
                        <Redirect to="/" />
                    </Route>
                </>
            )} */}
        </Switch>
    );
});

export const MainRoutes = () => {
    return (
        <Router>
            <div className="container">
                <Header />
                <MainRoutesWithRouter />
            </div>
        </Router>
    );
};
