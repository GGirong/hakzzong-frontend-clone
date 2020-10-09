import React, { useState } from 'react';

export const ConceptCreateView = () => {
    const [name, setName] = useState('');
    const [englishName, setEnglishName] = useState('');
    const [description, setDescription] = useState('');
    const [similarConcepts, setSimilarConcepts] = useState([]);
    const [relatedMajors, setRelatedMajors] = useState([]);
    const [relatedSchoolSubjects, setRelatedSchoolSubjects] = useState([]);

    const handleChange = (e, setter) => setter(e.target.value);

    const handleSearchNameButtonClick = e => {
        return;
    };

    const handleSubmitButtonClick = e => {
        return;
    };

    return (
        <div className="container-fluid">
            <div className="row w-100">
                <form>
                    <div className="form-row">
                        <div className="col-6">
                            <div className="w-10 d-inline-block justify-content-center align-items-center">
                                <h5 className="text-middle text-center mb-0">
                                    원리
                                </h5>
                            </div>
                            <input
                                type="text"
                                onChange={e => handleChange(e, setName)}
                                className="d-inline-block w-60 form-control rounded-0 border-dark"
                            />
                            <button
                                id="search-concepts-btn"
                                onClick={handleSearchNameButtonClick}
                                className="w-20 btn btn-secondary"
                            >
                                검색
                            </button>
                        </div>
                        <div className="col-6">
                            <div className="w-20 d-inline-block justify-content-center align-items-center">
                                <h5 className="text-middle text-center mb-0">
                                    영문명(원어)
                                </h5>
                            </div>
                            <input
                                type="text"
                                onChange={e => handleChange(e, setEnglishName)}
                                className="d-inline-block w-60 form-control rounded-0 border-dark"
                            />
                        </div>
                    </div>
                    <div className="form-line mt-4">
                        <div className="form-group w-100">
                            <label>
                                <h5 className="mr-2 d-inline-block">설명</h5>{' '}
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
                                    <span> {description.length}/300</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row mt-4">
                        <div className="col-2">
                            <div className="h-100 d-flex justify-content-center align-items-center">
                                <h5 className="text-middle text-center mb-0">
                                    유사개념
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
                                    원어명
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
                                    긴밀학과
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
                    <div className="form-row mt-3">
                        <div className="col-2">
                            <div className="h-100 d-flex justify-content-center align-items-center">
                                <h5 className="text-middle text-center mb-0">
                                    긴밀과목
                                </h5>
                            </div>
                        </div>
                        <div className="col-2">
                            <input
                                type="text"
                                className="related-subject form-control rounded-0 border-dark"
                            />
                        </div>
                        <div className="col-2">
                            <input
                                type="text"
                                className="related-subject form-control rounded-0 border-dark"
                            />
                        </div>
                        <div className="col-2">
                            <input
                                type="text"
                                className="related-subject form-control rounded-0 border-dark"
                            />
                        </div>
                        <div className="col-2">
                            <input
                                type="text"
                                className="related-subject form-control rounded-0 border-dark"
                            />
                        </div>
                    </div>
                    <div className="form-row mt-5">
                        <div className="offset-3 col-5 justify-content-center align-items-center d-flex">
                            <button
                                onClick={handleSubmitButtonClick}
                                type="button"
                                className="btn btn-primary rounded-0 btn-block"
                            >
                                제출하기
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
