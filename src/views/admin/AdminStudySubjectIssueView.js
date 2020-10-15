import React from 'react';

export const AdminResearchIssueView = props => {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="w-100">
                        <form>
                            <div className="form-row">
                                <div className="col-6">
                                    <div className="w-10 d-inline-block justify-content-center align-items-center">
                                        <h5 className="text-middle text-center mb-0">
                                            이론
                                        </h5>
                                    </div>
                                    <input
                                        type="text"
                                        value="예시이론"
                                        className="d-inline-block w-60 form-control rounded-0 border-dark"
                                    />
                                </div>
                            </div>
                            <div className="form-line mt-4">
                                <div className="form-group w-100">
                                    <label>
                                        <h5 className="mr-2 d-inline-block">
                                            설명
                                        </h5>{' '}
                                        <span>(공백 포함 250-300 글자)</span>
                                    </label>
                                    <div className="position-relative">
                                        <textarea className="concept-description d-block w-100 p-3 rounded-0">
                                            ""이란
                                        </textarea>
                                        <div className="position-absolute fixed-bottom w-100 d-flex justify-content-end p-3 text-muted">
                                            <span> 255/300</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-line mt-4">
                                <div className="form-group w-100">
                                    <label>
                                        <h5 className="mr-2 d-inline-block">
                                            과제
                                        </h5>
                                        <span>(공백 포함 250-300 글자)</span>
                                    </label>
                                    <div className="position-relative">
                                        <textarea className="concept-description d-block w-100 p-3 rounded-0">
                                            ""이란
                                        </textarea>
                                        <div className="position-absolute fixed-bottom w-100 d-flex justify-content-end p-3 text-muted">
                                            <span> 255/300</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-line mt-4">
                                <div className="form-group w-100 d-flex justify-content-end">
                                    <button className="btn btn-primary btn-lg">
                                        유사도 검사 진행
                                    </button>
                                </div>
                            </div>

                            <div className="form-row mt-5">
                                <div className="col-2">
                                    <div className="h-100 d-flex justify-content-center align-items-center">
                                        <h5 className="text-middle text-center mb-0">
                                            검색키워드
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <input
                                        type="text"
                                        className="form-control rounded-0 border-dark"
                                    />
                                </div>
                                <div className="col-2">
                                    <input
                                        type="text"
                                        className="form-control rounded-0 border-dark"
                                    />
                                </div>
                                <div className="col-2">
                                    <input
                                        type="text"
                                        className="form-control rounded-0 border-dark"
                                    />
                                </div>
                                <div className="col-2">
                                    <input
                                        type="text"
                                        className="form-control rounded-0 border-dark"
                                    />
                                </div>
                            </div>
                            <div className="form-row mt-3">
                                <div className="col-2">
                                    <div className="h-100 d-flex justify-content-center align-items-center">
                                        <h5 className="text-middle text-center mb-0">
                                            사례키워드
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <input
                                        type="text"
                                        className="form-control rounded-0 border-dark"
                                    />
                                </div>
                                <div className="col-2">
                                    <input
                                        type="text"
                                        className="form-control rounded-0 border-dark"
                                    />
                                </div>
                                <div className="col-2">
                                    <input
                                        type="text"
                                        className="form-control rounded-0 border-dark"
                                    />
                                </div>
                                <div className="col-2">
                                    <input
                                        type="text"
                                        className="form-control rounded-0 border-dark"
                                    />
                                </div>
                            </div>
                            <div className="form-row mt-4">
                                <div className="col-2">
                                    <div className="h-100 d-flex justify-content-center align-items-center">
                                        <h5 className="text-middle text-center mb-0">
                                            관련키워드
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <input
                                        type="text"
                                        className="related-major form-control rounded-0 border-dark"
                                    />
                                </div>
                                <div className="col-2">
                                    <input
                                        type="text"
                                        className="related-major form-control rounded-0 border-dark"
                                    />
                                </div>
                                <div className="col-2">
                                    <input
                                        type="text"
                                        className="related-major form-control rounded-0 border-dark"
                                    />
                                </div>
                                <div className="col-2">
                                    <input
                                        type="text"
                                        className="related-major form-control rounded-0 border-dark"
                                    />
                                </div>
                            </div>
                            <div className="form-row mt-5 d-flex justify-content-end">
                                <h4 className="text-muted">
                                    검색 키워드는 모두 필수, 전체 키워드 8개
                                    이상 작성
                                </h4>
                            </div>
                            <hr className="border-dark mt-4 thick" />
                            <div className="mt-5">
                                <div>
                                    <div className="mt-3">
                                        <h4>위의 주제는</h4>
                                    </div>
                                    <div className="mt-3 row">
                                        <div className="col-4">
                                            <h5 className="border text-center border-dark pt-3 pb-3">
                                                국어교육과
                                            </h5>
                                        </div>
                                        <div className="col-4 d-flex h-100 align-items-center justify-content-center">
                                            <h4>학과의 학생들이</h4>
                                        </div>
                                    </div>
                                </div>
                                <hr className="border-dark mt-5" />
                                <div className="mt-5">
                                    <div className="mt-3 row">
                                        <div className="col-3">
                                            <h5 className="border text-center border-dark pt-3 pb-3">
                                                국어 (+500p)
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <h4>단원 선택</h4>
                                    </div>

                                    <div className="mt-4 pr-5 pl-5">
                                        <div className="row">
                                            <div className="col-8 scroll border border-dark p-5">
                                                <div className="mt-3 mb-3">
                                                    <h4>2. 공리주의 (+500p)</h4>
                                                </div>
                                                <div className="mt-3 mb-3">
                                                    <h4 className="text-muted">
                                                        벤담의 공리주의를 알 수
                                                        있다.
                                                    </h4>
                                                </div>
                                                <div className="mt-3 mb-3">
                                                    <h4 className="text-muted">
                                                        에피쿠로스의 공리주의를
                                                        알 수 있다.
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h4>과목에서 발표하기 좋은 주제입니다.</h4>
                                </div>
                                <hr className="border-dark mt-5 thick" />
                                <div className="row mt-5">
                                    <table className="w-100 text-center">
                                        <tr>
                                            <th className="pt-2 pb-2">
                                                학생이름
                                            </th>
                                            <th className="pt-2 pb-2">학교</th>
                                            <th className="pt-2 pb-2">학년</th>
                                            <th className="pt-2 pb-2">
                                                발급일자
                                            </th>
                                        </tr>
                                        <tr>
                                            <td className="pt-2 pb-2">
                                                <input
                                                    type="text"
                                                    className="input border rounded-0 pt-2 pb-2"
                                                />
                                            </td>
                                            <td className="pt-2 pb-2">
                                                <input
                                                    type="text"
                                                    className="input border rounded-0 pt-2 pb-2"
                                                />
                                            </td>
                                            <td className="pt-2 pb-2">
                                                <input
                                                    type="text"
                                                    className="input border rounded-0 pt-2 pb-2"
                                                />
                                            </td>
                                            <td className="pt-2 pb-2">
                                                <input
                                                    type="text"
                                                    className="input border rounded-0 pt-2 pb-2"
                                                />
                                            </td>
                                        </tr>
                                    </table>
                                    <div className="d-flex w-100 justify-content-center align-items-center mt-5">
                                        <button className="btn border col-3 h-100 rounded-0 text-muted">
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
                                <div className="form-row mt-5 mb-5">
                                    <div className="offset-2 col-3 justify-content-center align-items-center d-flex">
                                        <button
                                            id="study-subject-issue-btn"
                                            type="button"
                                            className="btn btn-primary btn-lg rounded-0 btn-block"
                                        >
                                            발급하기
                                        </button>
                                    </div>
                                    <div className="offset-1 col-3 justify-content-center align-items-center d-flex">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-lg rounded-0 btn-block"
                                        >
                                            저장하기
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
