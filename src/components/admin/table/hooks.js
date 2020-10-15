import { useEffect, useState } from 'react';

export const usePaginatedCall = (rawCall, pagination) => {
    const { blockSize, limitPerPage, total, page } = pagination;

    const [pageBlock, setPageBlock] = useState([]);

    const getPageBlock = () => {
        const startPageNumber =
            page % blockSize === 0
                ? Math.floor(page / blockSize)
                : Math.floor(page / blockSize) + 1;

        const block = [];
        for (
            let currentPage = startPageNumber;
            currentPage < startPageNumber + blockSize;
            currentPage++
        ) {
            const accumulatedPostNumber = currentPage * limitPerPage;
            if (accumulatedPostNumber - total >= limitPerPage) {
                break;
            }
            block.push(currentPage);
        }

        if (block.length === 0) {
            block.push(1);
        }

        setPageBlock(block);
    };

    useEffect(() => {
        getPageBlock();
    }, []);

    useEffect(() => {
        getPageBlock();
    }, [blockSize, limitPerPage, page, total]);

    const call = params => rawCall({ ...params });
    return { call, pageBlock };
};
