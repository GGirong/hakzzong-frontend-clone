import React, { useState } from 'react';

export const PointsWithdrawalCreateView = props => {
    const [bank, setBank] = useState('');
    const [bankHolder, setBankHolder] = useState('');
    const [bankAccountNumber, setBankAccountNumber] = useState('');
    const [points, setPoints] = useState(0);

    const handleChange = (e, setter) => setter(e.target.value);

    const handleSubmitButtonClick = e => {
        return;
    };

    return (
        <div className="row">
            <div className="col-1">
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-arrow-bar-left display-4"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"
                    />
                </svg>
            </div>
            <div className="col-11">
                <div className="row mt-1">
                    <h3>
                        <b>정산하기</b>
                    </h3>
                    <div className="row mt-3">
                        <p>
                            정산은 10,000 포인트 이상부터 가능합니다. 매 주
                            목요일 2시에 일괄적으로 입금되며 목요일 2시 이전에
                            입력한 정산 포인트 만큼만 지급됩니다. 정산에 이상이
                            있는 경우 아래의 FAQ를 이용해주시기 바랍니다.
                        </p>
                    </div>
                    <div className="mt-3 row p-0">
                        <button className="btn btn-primary btn-lg rounded-0">
                            정산 관련 FAQ
                        </button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="row w-100 mt-3">
                        <h3>
                            <b>정산 받을 계좌</b>
                        </h3>
                    </div>
                    <div className="row w-100 mt-3">
                        <div className="col-2 p-0">
                            <label className="d-block">은행명</label>
                            <input
                                type="text"
                                onChange={e => handleChange(e, setBank)}
                                className="input rounded-0 border pt-3 pb-3 w-95"
                            />
                        </div>
                        <div className="col-5 p-0">
                            <label className="d-block">계좌번호</label>
                            <input
                                type="text"
                                onChange={e =>
                                    handleChange(e, setBankAccountNumber)
                                }
                                className="input w-95 rounded-0 border pt-3 pb-3"
                            />
                        </div>
                        <div className="col-5 p-0">
                            <label className="d-block">예금주</label>
                            <div className="row">
                                <input
                                    type="text"
                                    onChange={e =>
                                        handleChange(e, setBankHolder)
                                    }
                                    className="col-6 input rounded-0 border pt-3 pb-3"
                                />
                                <button className="col-5 btn btn-primary btn-lg ml-2">
                                    변경하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="row w-100 mt-3">
                        <h3>
                            <b>정산 받을 포인트</b>
                        </h3>
                    </div>
                    <div className="row w-100 mt-3">
                        <div className="col-4 p-0 d-flex align-items-center">
                            <input
                                type="text"
                                onChange={e => handleChange(e, setPoints)}
                                className="input rounded-0 border pt-3 pb-3 w-100"
                            />
                        </div>
                        <div className="col-1 p-0 d-flex align-items-center justify-content-center">
                            <label className="ml-3">포인트</label>
                        </div>
                        <div className="col-2 p-0 d-flex align-items-center">
                            <button className="btn btn-primary btn-lg ml-2">
                                전액정산
                            </button>
                        </div>
                        <div className="col-2 p-0 d-flex align-items-center justify-content-end">
                            <span className="text-muted">현재 잔액:</span>
                        </div>
                        <div className="col-2 p-0 d-flex align-items-center justify-content-end">
                            <span className="text-muted">5,600 포인트</span>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 pt-5">
                    <div className="offset-4 col-3 justify-content-center align-items-center d-flex">
                        <button
                            type="button"
                            onClick={handleSubmitButtonClick}
                            className="btn btn-primary btn-lg rounded-0 btn-block"
                        >
                            정산 요청
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
