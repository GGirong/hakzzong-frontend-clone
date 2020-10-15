import { useState } from 'react';

export * from './RegisterModal';
export * from './FindPasswordModal';
export * from './SearchConceptsModal';
export * from './ShowRewardsModal';
export * from './SearchRelatedMajorsModal';
export * from './SearchRelatedSchoolSubjectsModal';

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return {
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
    };
};
