import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAPI, APIRoute } from 'Client';

import { BaseTable } from './BaseTable';
import { Pagination } from './Pagination';
import { usePaginatedCall } from './hooks';

const columnNames = [
    '이름',
    '포인트',
    '은행',
    '계좌번호',
    '예금주',
    '신청일자',
];
const LIMIT_PER_PAGE = 10;
const BLOCK_SIZE = 5;

export const WithdrawalTable = props => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState();

    const form = useForm();
    const pointsWithdrawalListAPI = useAPI(
        APIRoute.Admin.PointsWithdrawal.List,
    );
    const { call: pointsWithdrawalAPICall, pageBlock } = usePaginatedCall(
        pointsWithdrawalListAPI.send,
        {
            blockSize: BLOCK_SIZE,
            limitPerPage: LIMIT_PER_PAGE,
            total: (data && data.total) || 0,
            page,
        },
    );

    const handleSubmit = form.handleSubmit(async data => {
        let pointsWithdrawals;
        try {
            pointsWithdrawals = await pointsWithdrawalAPICall(data);
            setData(pointsWithdrawals);
        } catch (e) {
            console.error(e);
        }
    });

    useEffect(() => {
        setPage(1);
    }, []);

    useEffect(() => {
        handleSubmit(form.getValues());
    }, [page]);

    return (
        <>
            <div className="col-12 mt-5">
                <BaseTable columnNames={columnNames} data={data} />
                <Pagination
                    pageBlock={pageBlock}
                    page={page}
                    setPage={setPage}
                />
            </div>
            <div className="mt-5 row justify-content-end">
                <button className="btn btn-lg btn-light">정산하기</button>
                <a
                    href="/templates/admin/points-withdrawals/"
                    className="btn btn-secondary"
                >
                    완료 목록 조회
                </a>
            </div>
        </>
    );
};
