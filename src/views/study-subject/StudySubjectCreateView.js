import React, { useState } from 'react';

export const StudySubjectCreateView = props => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [searchKeywords, setSearchKeywords] = useState([]);
    const [exampleKeywords, setExampleKeywords] = useState([]);
    const [relevantKeywords, setRelevantKeywords] = useState([]);
    const [majors, setMajors] = useState([]);
    const [schoolSubjects, setSchoolSubjects] = useState([]);

    const handleChange = (e, setter) => setter(e.target.value);

    const handleSubmitButtonClick = e => {
        return;
    };

    return (
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
                                    onChange={e => handleChange(e, setName)}
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
                                    <h5 className="mr-2 d-inline-block">
                                        설명
                                    </h5>{' '}
                                    <span>(공백 포함 250-300 글자)</span>
                                </label>
                                <div className="position-relative">
                                    <textarea
                                        onChange={e =>
                                            handleChange(e, setDescription)
                                        }
                                        className="concept-description d-block w-100 p-3 rounded-0"
                                    >
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
                                    <textarea
                                        onChange={e => handleChange(e)}
                                        className="concept-description d-block w-100 p-3 rounded-0"
                                    >
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
                                검색 키워드는 모두 필수, 전체 키워드 8개 이상
                                작성
                            </h4>
                        </div>
                        <hr className="border-dark mt-4 thick" />
                        <div className="mt-5">
                            <div>
                                <div className="mt-3">
                                    <h4>위의 주제는</h4>
                                </div>
                                <div className="mt-5">
                                    <div className="form-row">
                                        <div className="col-6">
                                            <input
                                                type="text"
                                                className="d-inline-block w-60 form-control rounded-0 border-dark pt-4 pb-4"
                                            />
                                            <button className="w-20 btn btn-secondary ml-2 pt-2 pb-2">
                                                검색
                                            </button>
                                        </div>
                                    </div>
                                    <div className="form-row mt-3">
                                        <div className="col-6">
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
                                </div>
                                <div className="mt-5">
                                    <h4>학과에 가고싶은 학생에게 적절해요</h4>
                                </div>
                            </div>
                            <hr className="border-dark mt-5" />
                            <div className="mt-5">
                                <div className="mt-3">
                                    <h4>이 학과들도 해당이 되나요?</h4>
                                </div>
                                <div className="mt-4 row">
                                    <div className="col-4">
                                        <h5 className="text-muted">
                                            국어교육과
                                        </h5>
                                    </div>
                                    <div className="col-4">
                                        <h5 className="text-muted">
                                            사회교육과
                                        </h5>
                                    </div>
                                    <div className="col-4">
                                        <h5 className="text-muted">
                                            물리교육과
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 row">
                                <div className="offset-4 col-3 justify-content-center align-items-center d-flex">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-lg rounded-0 btn-block position-relative"
                                    >
                                        과목 태깅하기
                                        <svg
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 16 16"
                                            className="bi bi-arrow-bar-right position-absolute right mt-1 mr-1"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"
                                            />
                                        </svg>
                                    </button>
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
                    </form>
                </div>
            </div>
        </div>
    );
};
