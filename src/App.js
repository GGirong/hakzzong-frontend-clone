import React from 'react';

import { MainRoutes } from 'Router';
import { AppContextProvider } from 'Contexts/AppContext';

export const App = () => {
    return (
        <AppContextProvider>
            <MainRoutes />
        </AppContextProvider>
    );
};
