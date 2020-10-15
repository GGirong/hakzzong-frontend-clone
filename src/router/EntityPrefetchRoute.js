import React, { useEffect } from 'react';

import { Route, Redirect, useLocation } from 'react-router-dom';

import { useAPI, APIRoute } from 'Client';

const mapPathToAPIRouteName = path => {
    const {
        ResearchAssistant: { Mission, MissionReport, RetrieveInitialContext },
    } = APIRoute;

    if (path.match(/missions\/[0-9]?/)) {
        return Mission.List;
    } else if (path.startsWith('/study-subjects/:id/')) {
        return MissionReport.Retrieve;
    }
};

export const EntityPrefetchRoute = ({
    routeComponent: RouteComponent = Route,
    component: Component,
    render,
    computedMatch: {
        params: { id = null },
    },
    path,
}) => {
    const location = useLocation();
    const { result, error, send: sendAPI } = useAPI(
        mapPathToAPIRouteName(path),
    );

    const entity = (location.state && location.state.entity) || result;

    useEffect(() => {
        if (entity) {
            return;
        }
        sendAPI(null, { additionalPath: id });
    }, []);

    return (
        <RouteComponent
            render={routeProps =>
                entity ? (
                    render ? (
                        render({ ...routeProps, entity })
                    ) : (
                        <Component {...{ ...routeProps, entity }} />
                    )
                ) : error ? (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { error, from: routeProps.location },
                        }}
                    />
                ) : (
                    <div>loading ...</div>
                )
            }
        />
    );
};
