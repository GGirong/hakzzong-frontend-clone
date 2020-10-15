import React, { useState, useContext } from 'react';
import { AppContext } from 'Contexts/';
import { SearchRelatedMajorsModal, useModal } from 'Components/modals';
import { RecommendMajor } from './RecommendMajor';

export const MajorSelector = ({ next, ...props }) => {
    const searchRelatedMajorsModal = useModal();
    const [majorCategories, setMajorCategories] = useState([]);
    const {
        getters: { getMajorCategory },
    } = useContext(AppContext);

    const addMajorCategory = majorCategory => {
        setMajorCategories([...majorCategories, majorCategory]);
    };

    return (
        <div>
            <div className="mt-3">
                <h4>위의 주제는</h4>
            </div>
            <div className="mt-5">
                <div className="form-row mt-3">
                    {majorCategories.map(majorCategory => (
                        <div key={majorCategory} className="col-3">
                            <h5 className="border text-center border-dark pt-3 pb-3">
                                {
                                    getMajorCategory(majorCategory)
                                        .subcategoryName
                                }
                            </h5>
                        </div>
                    ))}
                    <div className="col-6">
                        <button
                            type="button"
                            onClick={searchRelatedMajorsModal.open}
                            className="w-60 btn btn-outline-secondary pt-0 pb-0 rounded-0"
                        >
                            학과추가
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                className="display-4 bi bi-plus"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                                />
                            </svg>
                        </button>
                        <SearchRelatedMajorsModal
                            addMajorCategory={addMajorCategory}
                            {...searchRelatedMajorsModal}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <h4>학과에 가고싶은 학생에게 적절해요</h4>
            </div>
            {majorCategories.length > 0 && (
                <>
                    <hr className="border border-dark mt-5" />
                    <RecommendMajor />
                    <div className="mt-5 row">
                        <div className="offset-4 col-3 justify-content-center align-items-center d-flex">
                            <button
                                type="button"
                                className="btn btn-primary btn-lg rounded-0 btn-block position-relative"
                                onClick={() => next(majorCategories)}
                            >
                                과목 태깅하기
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
