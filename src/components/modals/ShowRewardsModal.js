import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { AppContext } from 'Contexts';
import { compose } from 'Utils';

export const ShowRewardsModal = ({ isOpen = false, close }) => {
    const {
        researchAssistant: { rewards },
    } = useContext(AppContext);

    const [majorName, setMajorName] = useState('');
    const [schoolSubjectName, setSchoolSubjectName] = useState('');

    const [filteredRewards, setFilteredRewards] = useState([]);
    const [filteredMajors, setFilteredMajors] = useState([]);
    const [filteredSchoolSubjects, setFilteredSchoolSubjects] = useState([]);

    const majorNameReducer = reward => reward.major.name;
    const schoolSubjectNameReducer = reward => reward.schoolSubject.name;
    const reduceRewards = reducer => filteredRewards.map(reducer);
    const makeUnique = data => [...new Set(data)];

    const setMajors = () =>
        compose(setFilteredMajors, makeUnique, reduceRewards)(majorNameReducer);
    const setSchoolSubjects = () =>
        compose(
            setFilteredSchoolSubjects,
            makeUnique,
            reduceRewards,
        )(schoolSubjectNameReducer);

    const filterRewardByMajorName = data =>
        data.filter(({ major: { name } }) => name.includes(majorName));

    const filterRewardBySchoolSubjectName = data =>
        data.filter(({ schoolSubject: { name } }) =>
            name.includes(schoolSubjectName),
        );

    const handleFilterMajorButtonClick = () => {
        compose(setFilteredRewards, filterRewardByMajorName)(rewards);
        setMajors();
    };

    const handleFilterSchoolSubjectButtonClick = () => {
        compose(setFilteredRewards, filterRewardBySchoolSubjectName)(rewards);
        setMajors();
    };

    return (
        <Modal id="show-rewards-modal" onHide={close} show={isOpen}>
            <Modal.Header className="d-block">
                <div className="row w-100">
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={close}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="row w-100 justify-content-center align-items-center">
                    <h4>탐구주제 학과/과목 조합</h4>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="card rewards-box rewards-box-1">
                        <div className="card-title">학과</div>
                        <div className="card-body">
                            <div className="row w-100">
                                <div className="input-group w-100">
                                    <input
                                        type="text"
                                        value={majorName}
                                        onChange={e =>
                                            setMajorName(e.target.value)
                                        }
                                        className="form-control border-right-0"
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text bg-transparent border-left-0">
                                            <svg
                                                onClick={
                                                    handleFilterMajorButtonClick
                                                }
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
                                <div className="input-group w-50 mt-3">
                                    <select
                                        className="form-control"
                                        defaultValue="0"
                                    >
                                        <option value="0">계열 선택</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="item-list">
                                    {/* {filteredMajors.length === 0 ? (
                                                <div className="item text-muted">
                                                    검색 결과가 없습니다.
                                                </div>
                                            ) : (
                                                filteredMajors.map(
                                                    (major, index) => (
                                                        <div className="item text-muted">
                                                            {major.name}
                                                        </div>
                                                    ),
                                                )
                                            )} */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card rewards-box rewards-box-1">
                        <div className="card-title">과목</div>
                        <div className="card-body">
                            <div className="row w-100">
                                <div className="input-group">
                                    <input
                                        value={schoolSubjectName}
                                        onChange={e =>
                                            setSchoolSubjectName(e.target.value)
                                        }
                                        type="text"
                                        className="form-control border-right-0"
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text bg-transparent border-left-0">
                                            <svg
                                                onClick={
                                                    handleFilterSchoolSubjectButtonClick
                                                }
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
                                <div className="input-group mt-3">
                                    <select
                                        className="form-control mr-2"
                                        value="0"
                                    >
                                        <option value="0">
                                            포인트 높은 순 정렬
                                        </option>
                                    </select>
                                    <select className="form-control">
                                        <option value="">과목 선택</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="item-list">
                                    {/* {filteredSchoolSubjects.length ===
                                            0 ? (
                                                <div className="item text-muted">
                                                    검색 결과가 없습니다.
                                                </div>
                                            ) : (
                                                filteredSchoolSubjects.map(
                                                    (schoolSubject, index) => (
                                                        <div className="item text-muted">
                                                            {schoolSubject.name}
                                                        </div>
                                                    ),
                                                )
                                            )} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};
