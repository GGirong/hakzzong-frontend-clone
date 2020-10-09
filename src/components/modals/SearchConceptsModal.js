import React, { useState } from 'react';

import { Modal, Button } from 'react-bootstrap';

export const SearchConceptsModal = ({
    show = false,
    open = () => {},
    close = () => {},
}) => {
    return (
        <Modal id="search-concepts-modal" className="modal-narrow" show={show}>
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
                            <h4>검색 결과</h4>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="search-result-box">
                                    <div className="item">이런저런이론</div>
                                    <div className="item">이런저런이론</div>
                                    <div className="item">이런저런이론</div>
                                    <div className="item">이런저런이론</div>
                                    <div className="item">이런저런이론</div>
                                    <div className="item">이런저런이론</div>
                                    <div className="item">이런저런이론</div>
                                    <div className="item">이런저런이론</div>
                                    <div className="item">이런저런이론</div>
                                </div>
                                <div className="row w-100">
                                    <div className="col-12 pt-2 pb-2">
                                        <label>원리</label>
                                    </div>
                                    <div className="col-12">
                                        <input className="input w-100 pt-3 pb-3 rounded-0" />
                                    </div>
                                </div>
                                <div className="row w-100 mt-5">
                                    <div className="col-6">
                                        <button className="btn btn-secondary w-100 rounded-0">
                                            취소
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button className="btn btn-primary w-100 rounded-0">
                                            확인
                                        </button>
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
