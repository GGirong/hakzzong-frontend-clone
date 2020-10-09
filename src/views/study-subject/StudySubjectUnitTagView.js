import React from 'react';

export const StudySubjectUnitTagView = props => (
    <div className="container-fluid">
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
                                className="d-inline-block w-60 form-control rounded-0 border-dark"
                            />
                            <button className="w-20 btn btn-secondary">
                                검색
                            </button>
                        </div>
                    </div>
                    <div className="form-line mt-4">
                        <div className="form-group w-100">
                            <label>
                                <h5 className="mr-2 d-inline-block">설명</h5>{' '}
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
                                <h5 className="mr-2 d-inline-block">과제</h5>
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
                            검색 키워드는 모두 필수, 전체 키워드 8개 이상 작성
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
                                <div className="col-4">
                                    <h5 className="border text-center border-dark pt-3 pb-3">
                                        사회교육과
                                    </h5>
                                </div>
                                <div className="col-4">
                                    <h5 className="border text-center border-dark pt-3 pb-3">
                                        물리교육과
                                    </h5>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h4>에 가고싶은 학생에게 적절해요</h4>
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
                                    <div className="col-6 scroll border border-dark p-5">
                                        <div className="mt-3 mb-3">
                                            <h4>1. 화법과 작문</h4>
                                        </div>
                                        <div className="mt-3 mb-3">
                                            <h4 className="text-muted">
                                                1. 화법과 작문
                                            </h4>
                                        </div>
                                        <div className="mt-3 mb-3">
                                            <h4 className="text-muted">
                                                2. 글쓰기의 기초
                                            </h4>
                                        </div>
                                        <div className="mt-3 mb-3">
                                            <h4 className="text-muted">
                                                3. 말하기의 방법
                                            </h4>
                                        </div>
                                        <div className="mt-3 mb-3">
                                            <h4 className="text-muted">
                                                4. 문학과 세상
                                            </h4>
                                        </div>
                                        <div className="mt-3 mb-3">
                                            <h4 className="text-muted">
                                                5. 글쓰기의 비평
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-6 scroll border border-left-0 border-dark p-5">
                                        <div className="mt-3 mb-3">
                                            <h4>화법을 잘 할 수 있다.</h4>
                                        </div>
                                        <div className="mt-3 mb-3">
                                            <h4 className="text-muted">
                                                국어를 잘 할 수 있다.
                                            </h4>
                                        </div>
                                        <div className="mt-3 mb-3">
                                            <h4>무언가를 잘 할 수 있다.</h4>
                                        </div>
                                        <div className="mt-3 mb-3">
                                            <h4>화법을 잘 할 수 있다.</h4>
                                        </div>
                                        <div className="mt-3 mb-3">
                                            <h4 className="text-muted">
                                                국어를 잘 할 수 있다.
                                            </h4>
                                        </div>
                                        <div className="mt-3 mb-3">
                                            <h4>무언가를 잘 할 수 있다.</h4>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex justify-content-end mt-3">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-lg rounded-0 "
                                        >
                                            확인
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-1">
                            <div className="col-5">
                                <button className="w-60 btn btn-outline-secondary pt-0 pb-0 rounded-0">
                                    <svg
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 16 16"
                                        className="display-4 bi bi-plus"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h4>과목에서 발표하기 좋은 주제입니다.</h4>
                        </div>
                        <hr className="border-dark mt-5" />
                        <div className="mt-5">
                            <div className="mt-3">
                                <h4>이 단원들도 해당이 되나요?</h4>
                            </div>
                            <div className="mt-4 row">
                                <div className="col-4">
                                    <h5 className="text-muted">
                                        언어와 매체/1.화법과 작문(+200p)
                                    </h5>
                                </div>
                                <div className="col-4">
                                    <h5 className="text-muted">
                                        수학 1/2.미분과 적분(+300p)
                                    </h5>
                                </div>
                                <div className="col-4">
                                    <h5 className="text-muted">
                                        물리 1/5.작용과 반작용(+500p)
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <hr className="border-dark mt-5 thick" />
                        <div className="row mt-5 justify-content-end">
                            <div className="d-flex align-items-center mr-5">
                                <h3>총 포인트</h3>
                            </div>
                            <div className="border border-dark col-4 text-center p-2">
                                <h3>0</h3>
                            </div>
                        </div>
                        <div className="form-row mt-5 mb-5">
                            <div className="offset-4 col-3 justify-content-center align-items-center d-flex">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg rounded-0 btn-block"
                                >
                                    임시 저장
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
);
