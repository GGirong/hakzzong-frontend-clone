import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useAPI, APIRoute } from 'Client';

import { BaseTable } from './BaseTable';
import { Pagination } from './Pagination';
import { usePaginatedCall } from './hooks';

const columnNames = ['이름', '대학', '학과', '완료미션', '가입일자'];
const LIMIT_PER_PAGE = 10;
const BLOCK_SIZE = 5;

export const ResearchAssistantTable = props => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState();

    const form = useForm();
    const researchAssistantListAPI = useAPI(
        APIRoute.Admin.ResearchAssistant.List,
    );
    const { call: researchAssistantAPICall, pageBlock } = usePaginatedCall(
        researchAssistantListAPI.send,
        {
            blockSize: BLOCK_SIZE,
            limitPerPage: LIMIT_PER_PAGE,
            total: (data && data.total) || 0,
            page,
        },
    );

    const handleSubmit = form.handleSubmit(async data => {
        let researchAssistants;
        try {
            researchAssistants = await researchAssistantAPICall(data);
            setData(researchAssistants);
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
            <Form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-2">
                        <div className="input-group d-flex align-items-center">
                            <input
                                type="radio"
                                className="form-control radio"
                            />
                            <label className="control-label mb-0">
                                가입 일자 순
                            </label>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="input-group d-flex align-items-center">
                            <input
                                type="radio"
                                className="form-control radio"
                            />
                            <label className="control-label mb-0">
                                완료 미션 순
                            </label>
                        </div>
                    </div>
                </div>
            </Form>
            <div className="col-12 mt-5">
                <BaseTable columnNames={columnNames} data={data} />
                <Pagination
                    pageBlock={pageBlock}
                    page={page}
                    setPage={setPage}
                />
            </div>
        </>
    );
};
