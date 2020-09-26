import React from 'react';

import { MainRoutes } from 'Router';
import { AppContextProvider } from './AppContext';

export const App = props => {
    return (
        <AppContextProvider>
            <MainRoutes {...props} />
        </AppContextProvider>
    );
};
