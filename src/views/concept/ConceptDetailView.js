import React from 'react';

export const ConcetDetailView = props => (
    <>
        <div className="row mt-3 border-bottom pb-3">
            <div className="col-6">
                <div className="row">
                    <div className="col-3 d-flex align-items-center">
                        <h5>원리</h5>
                    </div>
                    <div className="col-9">
                        <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-3 d-flex align-items-center">
                        <h5>영문명(원어)</h5>
                    </div>
                    <div className="col-9">
                        <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                    </div>
                </div>
            </div>

            <div className="col-6">
                <div className="h-100 border border-dark">
                    <span className="text-muted d-flex w-100 h-100 justify-content-center align-items-center">
                        피드백을 적어주세요.
                    </span>
                </div>
            </div>
        </div>
        <div className="row mt-4 border-bottom pb-3">
            <div className="col-12 mb-3">
                <h4 className="d-inline-block">설명</h4>
                <span className="ml-3">(공백 포함 250-300자)</span>
            </div>
            <div className="col-6">
                <div className="position-relative h-100">
                    <textarea className="concept-description d-block h-100 w-100 p-3 rounded-0">
                        ""이란
                    </textarea>
                    <div className="position-absolute fixed-bottom w-100 d-flex justify-content-end p-3 text-muted">
                        <span> 255/300</span>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="border border-dark feedback-box ">
                    <span className="text-muted d-flex w-100 h-100 justify-content-center align-items-center">
                        피드백을 적어주세요.
                    </span>
                </div>
            </div>
        </div>
        <div className="row mt-4 mb-4 border-bottom pb-3">
            <div className="col-6">
                <div className="row">
                    <div className="col-3">
                        <div className="row justify-content-center align-items-center h-50">
                            <h4>유사개념</h4>
                        </div>
                        <div className="row h-50"></div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-6 p-1">
                                <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                            </div>
                            <div className="col-6 p-1">
                                <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 p-1">
                                <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                            </div>
                            <div className="col-6 p-1">
                                <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3">
                        <div className="row justify-content-center align-items-center h-50">
                            <h4>원어명</h4>
                        </div>
                        <div className="row h-50"></div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-6 p-1">
                                <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                            </div>
                            <div className="col-6 p-1">
                                <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 p-1">
                                <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                            </div>
                            <div className="col-6 p-1">
                                <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3">
                        <div className="row justify-content-center align-items-center h-50">
                            <h4>긴밀학과</h4>
                        </div>
                        <div className="row h-50"></div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-6 p-1">
                                <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                            </div>
                            <div className="col-6 p-1">
                                <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 p-1">
                                <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                            </div>
                            <div className="col-6 p-1">
                                <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3">
                        <div className="row justify-content-center align-items-center h-50">
                            <h4>긴밀과목</h4>
                        </div>
                        <div className="row h-50"></div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-6 p-1">
                                <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                            </div>
                            <div className="col-6 p-1">
                                <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 p-1">
                                <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                            </div>
                            <div className="col-6 p-1">
                                <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="border border-dark h-100">
                    <span className="text-muted d-flex w-100 h-100 justify-content-center align-items-center">
                        피드백을 적어주세요.
                    </span>
                </div>
            </div>
        </div>
        <div className="row mt-3 pb-3 mb-5">
            <div className="offset-4 col-3 justify-content-center align-items-center d-flex">
                <button
                    type="button"
                    className="btn btn-primary btn-lg rounded-0 btn-block"
                >
                    다시 제출하기
                </button>
            </div>
        </div>
    </>
);
