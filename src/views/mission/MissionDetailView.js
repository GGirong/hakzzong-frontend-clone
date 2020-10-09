import React from 'react';

export const MissionDetailView = props => (
    <>
        <div className="container">
            <button className="btn btn-go-back" />
            <svg
                width="3rem"
                height="3rem"
                viewBox="0 0 16 16"
                className="bi bi-arrow-bar-left"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"
                />
            </svg>
        </div>

        <div className="row justify-content-center">
            <div className="mission-description-box">
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                    <h4>이론 작성 RFP에 대한 설명</h4>
                </div>
            </div>
        </div>
        <div className="row justify-content-center mt-4">
            <div className="mission-description-box">
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                    <h4>이론 작성 RFP에 대한 설명</h4>
                </div>
            </div>
        </div>
        <div className="row justify-content-center mt-4">
            <div className="col-lg-5">
                <button className="btn btn-secondary w-100 mission-participate">
                    작성하기
                </button>
            </div>
        </div>
    </>
);
