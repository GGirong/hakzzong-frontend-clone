import React from 'react';

export const AdminStudySubjectDetailView = props => {
    return (
        <>
            <div className="row mt-3 border-bottom pb-3">
                <div className="col-6 p-0">
                    <div className="row">
                        <div className="col-2 d-flex align-items-center">
                            <h4 className="d-inline-block">이론</h4>
                        </div>
                        <div className="col-10">
                            <input className="input border rounded-0 h-100 w-100 p-3 border-dark" />
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-3 mt-3">
                    <h4 className="d-inline-block">설명</h4>
                    <span className="ml-3">(공백 포함 250-300자)</span>
                </div>
                <div className="col-6">
                    <div className="position-relative feedback-box">
                        <textarea className="concept-description d-block h-100 w-100 p-3 rounded-0">
                            ""이란
                        </textarea>
                        <div className="position-absolute fixed-bottom w-100 d-flex justify-content-end p-3 text-muted">
                            <span> 255/300</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4 border-bottom pb-3">
                <div className="col-12 mb-3">
                    <h4 className="d-inline-block">과제</h4>
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
                    <div className="border border-dark feedback-box">
                        <span className="text-muted d-flex w-100 h-100 justify-content-center align-items-center">
                            피드백을 적어주세요.
                        </span>
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-center pt-3">
                    <button
                        type="button"
                        className="btn btn-primary btn-lg rounded-0"
                    >
                        유사도 검사 진행
                    </button>
                </div>
            </div>
            <div className="row mt-4 mb-4 border-bottom pb-3">
                <div className="col-6">
                    <div className="row">
                        <div className="col-4">
                            <div className="row justify-content-center align-items-center h-50">
                                <h4>검색키워드</h4>
                            </div>
                            <div className="row h-50"></div>
                        </div>
                        <div className="col-8 p-0">
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
                        <div className="col-4">
                            <div className="row justify-content-center align-items-center h-50">
                                <h4>사례키워드</h4>
                            </div>
                            <div className="row h-50"></div>
                        </div>
                        <div className="col-8 p-0">
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
                        <div className="col-4">
                            <div className="row justify-content-center align-items-center h-50">
                                <h4>관련키워드</h4>
                            </div>
                            <div className="row h-50"></div>
                        </div>
                        <div className="col-8 p-0">
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
            <hr className="border-dark mt-4 thick" />
            <div className="pt-3">
                <div className="row mt-3 border-bottom pb-5">
                    <div className="col-6">
                        <div className="mt-3 w-100">
                            <h4>위의 주제는</h4>
                        </div>
                        <div className="row mt-3">
                            <div className="col-6 p-0">
                                <div className="w-100 pl-5 pr-5 pt-3 pb-3 border border-dark d-inline-block">
                                    <h4>수학교육</h4>
                                </div>
                            </div>
                            <div className="col-6 p-0">
                                <div className="pl-3 pt-3 pb-3 d-inline-block">
                                    <h4>학과의 학생들이</h4>
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

                <div className="row mt-3 border-bottom pt-3 pb-5">
                    <div className="col-6">
                        <div className="row mt-3">
                            <div className="col-6 p-0">
                                <div className="w-100 pl-5 pr-5 pt-3 pb-3 border border-dark d-inline-block">
                                    <h4>국어</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 p-0">
                                <div className="w-100 pl-5 pr-5 pt-5 pb-5 border border-dark d-inline-block">
                                    <h4>1. 화법과 작문(+500p)</h4>
                                    <div className="pl-5">
                                        <h5>화법을 잘 할 수 있다.</h5>
                                        <h5>글쓰기를 잘 할 수 있다.</h5>
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

                <div className="row mt-3 pb-3 pt-3">
                    <h4>과목에서 발표하기 좋은 주제입니다.</h4>
                </div>
            </div>
            <hr className="border-dark mt-4 thick" />
            <div className="row mt-5 pb-3 mb-5">
                <div className="offset-2 col-3 justify-content-center align-items-center d-flex">
                    <button
                        type="button"
                        className="btn btn-primary btn-lg rounded-0 btn-block"
                    >
                        반려하기
                    </button>
                </div>
                <div className="offset-1 col-3 justify-content-center align-items-center d-flex">
                    <button
                        type="button"
                        className="btn btn-primary btn-lg rounded-0 btn-block"
                    >
                        승인하기
                    </button>
                </div>
            </div>
        </>
    );
};
