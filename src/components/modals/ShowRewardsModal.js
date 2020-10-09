import React, { useState } from 'react';

import { Modal, Button } from 'react-bootstrap';

export const ShowRewardsModal = ({
    show = false,
    open = () => {},
    close = () => {},
}) => {
    return (
        <Modal id="show-rewards-modal">
            <Modal.Dialog>
                <div className="modal-content">
                    <Modal.Header className="d-block">
                        <div className="row w-100">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
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
                                                className="form-control border-right-0"
                                            />
                                            <div className="input-group-append">
                                                <div className="input-group-text bg-transparent border-left-0">
                                                    <svg
                                                        width="1rem"
                                                        height="1rem"
                                                        viewBox="0 0 16 16"
                                                        className="bi bi-search"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                                                        />
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group w-50 mt-3">
                                            <select
                                                className="form-control"
                                                value="0"
                                            >
                                                <option value="0">
                                                    계열 선택
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="item-list">
                                            <div className="item text-muted">
                                                경영학과
                                            </div>
                                            <div className="item text-muted">
                                                경영학과
                                            </div>
                                            <div className="item text-muted">
                                                경영학과
                                            </div>
                                            <div className="item text-muted">
                                                경영학과
                                            </div>
                                            <div className="item text-muted">
                                                경영학과
                                            </div>
                                            <div className="item text-muted">
                                                경영학과
                                            </div>
                                            <div className="item text-bold">
                                                경영학과
                                            </div>
                                            <div className="item text-muted">
                                                경영학과
                                            </div>
                                            <div className="item text-muted">
                                                경영학과
                                            </div>
                                            <div className="item text-muted">
                                                경영학과
                                            </div>
                                            <div className="item text-muted">
                                                경영학과
                                            </div>
                                            <div className="item text-muted">
                                                경영학과
                                            </div>
                                            <div className="item text-muted">
                                                경영학과
                                            </div>
                                            <div className="item text-muted">
                                                경영학과
                                            </div>
                                            <div className="item text-muted">
                                                경영학과
                                            </div>
                                            <div className="item text-muted">
                                                경영학과
                                            </div>
                                            <div className="item text-muted">
                                                경영학과
                                            </div>
                                            <div className="item text-muted">
                                                경영학과
                                            </div>
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
                                                type="text"
                                                className="form-control border-right-0"
                                            />
                                            <div className="input-group-append">
                                                <div className="input-group-text bg-transparent border-left-0">
                                                    <svg
                                                        width="1rem"
                                                        height="1rem"
                                                        viewBox="0 0 16 16"
                                                        className="bi bi-search"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                                                        />
                                                        <path
                                                            fill-rule="evenodd"
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
                                                <option value="">
                                                    과목 선택
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="item-list">
                                            <div className="item text-muted">
                                                물리 I (+ 500p)
                                            </div>
                                            <div className="item text-muted">
                                                물리 II (+ 1,000p)
                                            </div>
                                            <div className="item text-muted">
                                                이것 (+ 300p)
                                            </div>
                                            <div className="item text-muted">
                                                물리 I (+ 500p)
                                            </div>
                                            <div className="item text-muted">
                                                물리 I (+ 500p)
                                            </div>
                                            <div className="item text-muted">
                                                물리 I (+ 500p)
                                            </div>
                                            <div className="item text-bold">
                                                물리 I (+ 500p)
                                            </div>
                                            <div className="item text-muted">
                                                물리 I (+ 500p)
                                            </div>
                                            <div className="item text-muted">
                                                물리 I (+ 500p)
                                            </div>
                                            <div className="item text-muted">
                                                물리 I (+ 500p)
                                            </div>
                                            <div className="item text-muted">
                                                물리 I (+ 500p)
                                            </div>
                                            <div className="item text-muted">
                                                물리 I (+ 500p)
                                            </div>
                                            <div className="item text-muted">
                                                물리 I (+ 500p)
                                            </div>
                                            <div className="item text-muted">
                                                물리 I (+ 500p)
                                            </div>
                                            <div className="item text-muted">
                                                물리 I (+ 500p)
                                            </div>
                                            <div className="item text-muted">
                                                물리 I (+ 500p)
                                            </div>
                                            <div className="item text-muted">
                                                물리 I (+ 500p)
                                            </div>
                                            <div className="item text-muted">
                                                물리 I (+ 500p)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </div>
            </Modal.Dialog>
        </Modal>
    );
};
