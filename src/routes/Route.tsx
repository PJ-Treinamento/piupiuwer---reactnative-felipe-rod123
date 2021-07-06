import React from 'react';
import { Route as ReactRouter, RouteProps as ReactRouteProps, Redirect } from 'react-router-native';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
    const { user } = useAuth();

    return (
        <ReactRouter
            {...rest}
            render={({ location }) => {
                return isPrivate === !!user
                    ? (
                        <Component />
                    ) : (
                        <Redirect
                            to={{
                                pathname: isPrivate ? '/login' : '/',
                                state: { from: location }
                            }}
                        />
                    );
            }}
        />
    )
};

export default Route;