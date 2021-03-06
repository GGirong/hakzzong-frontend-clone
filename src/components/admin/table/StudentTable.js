import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useAPI, APIRoute } from 'Client';

import { BaseTable } from './BaseTable';
import { Pagination } from './Pagination';
import { usePaginatedCall } from './hooks';

const columnNames = ['이론', '학교', '학년', '발급횟수'];
const LIMIT_PER_PAGE = 10;
const BLOCK_SIZE = 5;

export const StudentTable = props => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState();

    const form = useForm();
    const studentListAPI = useAPI(APIRoute.Admin.Student.List);
    const { call: studentListAPICall, pageBlock } = usePaginatedCall(
        studentListAPI.send,
        {
            blockSize: BLOCK_SIZE,
            limitPerPage: LIMIT_PER_PAGE,
            total: (data && data.total) || 0,
            page,
        },
    );

    const handleSubmit = form.handleSubmit(async data => {
        let students;
        try {
            students = studentListAPICall(data);
            setData(students);
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
            <div className="row justify-content-center">
                <div className="col-8 offset-1">
                    <Form onSubmit={handleSubmit}>
                        <div className="row mt-3">
                            <div className="col-3 d-flex align-items-center justify-content-center h-100">
                                <h4 className="m-2">학생 검색</h4>
                            </div>
                            <div className="input-group col-6 p-0">
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
                        <div className="row mt-3">
                            <div className="col-3 d-flex align-items-center justify-content-center h-100">
                                <h4 className="m-2">학교 검색</h4>
                            </div>
                            <div className="input-group col-6 p-0">
                                <input
                                    name="schoolName"
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
                <BaseTable columnNames={columnNames} />
                <Pagination
                    pageBlock={pageBlock}
                    page={page}
                    setPage={setPage}
                />
            </div>
        </>
    );
};
