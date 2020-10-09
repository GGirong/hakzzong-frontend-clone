import { useState, useEffect, useContext } from 'react';

import { generateUuid } from 'Utils';
import { AppContext } from 'Contexts/AppContext';
import { apiClient } from 'Client';

export const useTracer = value => {
    return useState(value);
};

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return {
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
    };
};
