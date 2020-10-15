import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useAPI, APIRoute } from 'Client';

import { BaseTable } from './BaseTable';
import { Pagination } from './Pagination';
import { usePaginatedCall } from './hooks';

const columnNames = ['카테고리', '작성자', '이론', '작성일자'];
const LIMIT_PER_PAGE = 10;
const BLOCK_SIZE = 5;

export const MissionTable = props => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState();

    const form = useForm();
    const MissionListAPI = useAPI(APIRoute.Admin.Mission.List);
    const { call: MissionAPICall, pageBlock } = usePaginatedCall(
        MissionListAPI.send,
        {
            blockSize: BLOCK_SIZE,
            limitPerPage: LIMIT_PER_PAGE,
            total: (data && data.total) || 0,
            page,
        },
    );

    const handleSubmit = form.handleSubmit(async data => {
        let missions;
        try {
            missions = await MissionAPICall(data);
            setData(missions);
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
                    <div className="col-2 form-check d-flex justify-content-center align-items-center">
                        <input
                            name="type"
                            value="CONCEPT"
                            ref={form.register}
                            className="position-relative mr-2 form-check-input mt-0"
                            type="checkbox"
                            id="mission_concept"
                        />
                        <label
                            className="form-check-label"
                            for="mission_concept"
                        >
                            이론
                        </label>
                    </div>
                    <div className="col-2 form-check d-flex justify-content-center align-items-center">
                        <input
                            name="type"
                            value="STUDY_SUBJECT"
                            ref={form.register}
                            className="position-relative mr-2 form-check-input mt-0"
                            type="checkbox"
                            id="mission_study_subject"
                        />
                        <label
                            className="form-check-label"
                            for="mission_study_subject"
                        >
                            탐구주제
                        </label>
                    </div>
                    <div className="col-2 form-check d-flex justify-content-center align-items-center">
                        <input
                            name="type"
                            value="CONCEPT_RFP"
                            ref={form.register}
                            className="position-relative mr-2 form-check-input mt-0"
                            type="checkbox"
                            value=""
                            id="mission_rfp"
                        />
                        <label className="form-check-label" for="mission_rfp">
                            이론 RFP
                        </label>
                    </div>
                    <div className="col-2 form-check d-flex justify-content-center align-items-center">
                        <input
                            name="type"
                            value="STUDY_SUBJECT"
                            ref={form.register}
                            className="position-relative mr-2 form-check-input mt-0"
                            type="checkbox"
                            value=""
                            id="mission_rfp"
                        />
                        <label className="form-check-label" for="mission_rfp">
                            탐구주제 RFP
                        </label>
                    </div>
                    <div className="input-group col-4 p-0">
                        <input
                            name="name"
                            ref={form.register}
                            type="text"
                            className="form-control border-right-0 h-100 rounded-0"
                        />
                        <div className="input-group-append rounded-0">
                            <div className="input-group-text bg-transparent border-left-0 rounded-0">
                                <svg
                                    width="1rem"
                                    height="1rem"
                                    viewBox="0 0 16 16"
                                    className="bi bi-search"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                                    />
                                </svg>
                            </div>
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
