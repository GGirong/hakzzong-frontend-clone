import React, { useContext } from 'react';

import {
    BrowserRouter as Router,
    withRouter,
    Switch,
    Route,
} from 'react-router-dom';

import * as Views from 'Views';
import { AppContext } from 'Contexts';
import { Header } from 'Components/Header';

import { AnonymousOnlyRoute } from './AnonymousOnlyRoute';
import { AuthenticatedOnlyRoute } from './AuthenticatedOnlyRoute';
import { EntityPrefetchRoute } from './EntityPrefetchRoute';

const MainRoutesWithRouter = withRouter(router => {
    const { user, researchAssistant } = useContext(AppContext);
    const isAuthenticated = !!user.id;

    return (
        <Switch>
            <AnonymousOnlyRoute
                isAuthenticated={isAuthenticated}
                component={Views.MainView}
                exact
                path="/"
            />
            <AuthenticatedOnlyRoute
                component={Views.MissionTutorialView}
                exact
                isAuthenticated={true}
                path="/missions/tutorial/"
            />
            <AuthenticatedOnlyRoute
                component={Views.MissionDetailView}
                routeComponent={EntityPrefetchRoute}
                exact
                isAuthenticated={true}
                path="/missions/:id/"
            />
            <AuthenticatedOnlyRoute
                component={Views.MissionListView}
                routeComponent={EntityPrefetchRoute}
                exact
                isAuthenticated={true}
                path="/missions/"
            />
            <AuthenticatedOnlyRoute
                component={Views.PointsWithdrawalCreateView}
                exact
                isAuthenticated={true}
                path="/points-withdrawals/create/"
            />
            <AuthenticatedOnlyRoute
                component={Views.StudySubjectCreateSuccessView}
                exact
                isAuthenticated={true}
                beforeRouteGuard={!!researchAssistant.currentMissionId}
                path="/study-subjects/complete/"
            />
            <AuthenticatedOnlyRoute
                component={Views.StudySubjectCreatePatchView}
                exact
                isAuthenticated={true}
                beforeRouteGuard={!!researchAssistant.currentMissionId}
                path="/study-subjects/create/"
            />
            <AuthenticatedOnlyRoute
                routeComponent={EntityPrefetchRoute}
                component={Views.StudySubjectCreatePatchView}
                exact
                isAuthenticated={true}
                path="/study-subjects/:id/patch/"
            />
            <AuthenticatedOnlyRoute
                component={Views.ConceptCreateView}
                exact
                isAuthenticated={true}
                beforeRouteGuard={!!researchAssistant.currentMissionId}
                path="/concepts/create/"
            />
            <AuthenticatedOnlyRoute
                component={Views.ConceptDetailView}
                routeComponent={EntityPrefetchRoute}
                exact
                isAuthenticated={true}
                path="/concepts/:id/"
            />

            <Route component={Views.AdminListView} path="/admin/" />
            <Route exact component={Views.AdminAuthView} path="/admin/auth/" />
            <Route
                exact
                component={Views.AdminConceptDetailView}
                path="/admin/concepts/:id/"
            />
            <Route
                exact
                component={Views.AdminStudySubjectDetailView}
                path="/admin/study-subjects/:id/"
            />
            <Route
                exact
                component={Views.AdminStudySubjectIssueView}
                path="/admin/study-subjects/:id/issue/"
            />
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
