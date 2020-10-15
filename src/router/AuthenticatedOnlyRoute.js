import React from 'react';

import { Route, Redirect } from 'react-router-dom';

export const beforeRouteGuard = component => ({
    beforeRouteGuard,
    ...props
}) => {
    if (typeof beforeRouteGuard === 'function') {
        if (!beforeRouteGuard()) {
            return <Redirect to={{ pathname: '/' }} />;
        }
    }
    return component(...props);
};

export const AuthenticatedOnlyRoute = ({
    isAuthenticated,
    routeComponent: RouteComponent = Route,
    component: Component,
    render,
    ...rest
}) => {
    return (
        <RouteComponent
            {...rest}
            render={routeProps =>
                isAuthenticated ? (
                    render ? (
                        render({ ...rest, ...routeProps })
                    ) : (
                        <Component {...{ ...rest, ...routeProps }} />
                    )
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: routeProps.location },
                        }}
                    />
                )
            }
        />
    );
};
