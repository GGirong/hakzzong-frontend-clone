import React, { useContext } from 'react';
import { AppContext } from 'Contexts/AppContext';
import { useHistory } from 'react-router-dom';
import { ShowRewardsModal, useModal } from 'Components/modals';
import { useAPI, APIRoute } from 'Client';

export const Header = (props = { user: {} }) => {
    const { user, dispatchers } = useContext(AppContext);

    const showRewardsModal = useModal();
    const logoutAPI = useAPI(APIRoute.Common.Auth.Logout, {
        callbacks: {
            onSuccess: dispatchers.clear,
        },
    });
    const history = useHistory();

    return (
        <>
            <header className="pt-3 pb-3 row">
                <div className="col-4 p-0">
                    <h4 onClick={() => history.push('/')}>학쫑</h4>
                </div>
                {user.username ? (
                    <>
                        <div className="col-8 p-0">
                            <div className="row">
                                <div className="col-4 bg-info d-flex align-items-center justify-content-center">
                                    <button
                                        onClick={showRewardsModal.open}
                                        id="show-rewards-btn"
                                        className="btn"
                                    >
                                        <b>탐구주제 학과/과목 조합 보기</b>
                                    </button>
                                </div>
                                <div className="col-3 d-flex align-items-center justify-content-center point-mobile">
                                    <span>1,000 포인트</span>
                                </div>
                                <div className="col-2 bg-info d-flex align-items-center justify-content-center">
                                    <b
                                        onClick={() =>
                                            history.push(
                                                '/points-withdrawals/create/',
                                            )
                                        }
                                    >
                                        정산하기
                                    </b>
                                </div>
                                <div className="col-3 d-flex align-items-center justify-content-center">
                                    <div className="rounded-circle position-relative">
                                        <svg
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 16 16"
                                            className="bi bi-person-circle user-profile"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                            <path
                                                fillRule="evenodd"
                                                d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                                            />
                                        </svg>

                                        <div className="position-absolute profile-container">
                                            <div className="row mt-3">
                                                <div className="col-12">
                                                    <div className="row w-100 mt-3">
                                                        <div className="col-9">
                                                            승인 완료 미션
                                                        </div>
                                                        <div className="col-3 d-flex justify-content-end">
                                                            {/* {
                                                            acceptedMissionReports.length
                                                        } */}
                                                        </div>
                                                    </div>
                                                    <div className="row w-100 mt-3">
                                                        <div className="col-9">
                                                            승인 대기 미션
                                                        </div>
                                                        <div className="col-3 d-flex justify-content-end">
                                                            {/* {
                                                            ongoingMissionReports.length
                                                        } */}
                                                        </div>
                                                    </div>
                                                    <div className="row w-100 mt-3">
                                                        <div className="col-9">
                                                            반려 미션
                                                        </div>
                                                        <div className="col-3 d-flex justify-content-end">
                                                            {/* {
                                                            rejectedMissionReports.length
                                                        } */}
                                                        </div>
                                                    </div>
                                                    <div className="row w-100 flex-column mt-3 align-items-end">
                                                        <a className="mt-2">
                                                            프로필 수정
                                                        </a>
                                                        <a className="mt-2">
                                                            로그아웃
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="justify-content-center align-items-center profile-name">
                                        <h5 className="mb-0 ml-3">
                                            <b>{user.username}</b>님
                                        </h5>
                                        <button
                                            onClick={() => logoutAPI.send()}
                                        >
                                            logout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <></>
                )}
                <ShowRewardsModal {...showRewardsModal} />
            </header>
        </>
    );
};
