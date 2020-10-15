import React from 'react';

import { Route, Redirect } from 'react-router-dom';

export const AnonymousOnlyRoute = ({
    isAuthenticated,
    render,
    routeComponent: RouteComponent = Route,
    component: Component,
    ...rest
}) => {
    return (
        <RouteComponent
            {...rest}
            render={routeProps =>
                !isAuthenticated ? (
                    render ? (
                        render(routeProps)
                    ) : (
                        <Component {...routeProps} />
                    )
                ) : (
                    <Redirect
                        to={{
                            pathname: '/missions/',
                            state: {
                                from: routeProps.location,
                            },
                        }}
                    />
                )
            }
        />
    );
};
