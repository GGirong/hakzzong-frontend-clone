import { useState } from 'react';

export const useModal = () => {
    const [visible, setVisible] = useState(false);
    const [openProps, setOpenProps] = useState({});

    const open = openProps => {
        setOpenProps({ ...openProps });
        setVisible(true);
    };

    const close = () => {
        setOpenProps({});
        setVisible(false);
    };

    return [visible, open, close, openProps];
};
