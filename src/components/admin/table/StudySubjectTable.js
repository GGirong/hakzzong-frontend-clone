import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useAPI, APIRoute } from 'Client';

import { BaseTable } from './BaseTable';
import { Pagination } from './Pagination';
import { usePaginatedCall } from './hooks';

const columnNames = ['이론', '과제', '발급횟수'];
const LIMIT_PER_PAGE = 10;
const BLOCK_SIZE = 5;

export const StudySubjectTable = props => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState();

    const form = useForm();
    const studySubjectListAPI = useAPI(APIRoute.Admin.StudySubject.List);
    const { call: studySubjectListAPICall, pageBlock } = usePaginatedCall(
        studySubjectListAPI.send,
        {
            blockSize: BLOCK_SIZE,
            limitPerPage: LIMIT_PER_PAGE,
            total: (data && data.total) || 0,
            page,
        },
    );

    const handleSubmit = form.handleSubmit(async data => {
        let studySubjects;
        try {
            studySubjects = await studySubjectListAPICall(data);
            setData(studySubjects);
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
            <div className="row justify-content-center pt-3">
                <div className="col-8 offset-1">
                    <Form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-3 d-flex align-items-center justify-content-center h-100">
                                <h4 className="m-2">과목 선택</h4>
                            </div>
                            <div className="col-6 p-0">
                                <input
                                    type="hidden"
                                    name="schoolSubject"
                                    ref={form.register}
                                />
                                <button className="btn border w-100 h-100 rounded-0 text-muted">
                                    <svg
                                        width="1.5em"
                                        height="1.5em"
                                        viewBox="0 0 16 16"
                                        className="bi bi-plus"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-3 d-flex align-items-center justify-content-center h-100">
                                <h4 className="m-2">단원 선택</h4>
                            </div>
                            <div className="col-6 p-0">
                                <input
                                    type="hidden"
                                    name="schoolSubjectUnit"
                                    ref={form.register}
                                />
                                <button className="btn border w-100 h-100 rounded-0 text-muted">
                                    <svg
                                        width="1.5em"
                                        height="1.5em"
                                        viewBox="0 0 16 16"
                                        className="bi bi-plus"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-3 d-flex align-items-center justify-content-center h-100">
                                <h4 className="m-2">학과 선택</h4>
                            </div>
                            <div className="col-6 p-0">
                                <input
                                    type="hidden"
                                    name="majorCategory"
                                    ref={form.register}
                                />
                                <button className="btn border w-100 h-100 rounded-0 text-muted">
                                    <svg
                                        width="1.5em"
                                        height="1.5em"
                                        viewBox="0 0 16 16"
                                        className="bi bi-plus"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-3 d-flex align-items-center justify-content-center h-100">
                                <h4 className="m-2">키워드 검색</h4>
                            </div>
                            <div className="input-group col-6 p-0">
                                <input
                                    name="kewordName"
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
                </div>
            </div>
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
