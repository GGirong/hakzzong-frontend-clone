import React, { useState } from 'react';

import { Modal, Button } from 'react-bootstrap';

export const FindPasswordModal = ({
    show = false,
    open = () => {},
    close = () => {},
}) => {
    return (
        <Modal id="find-password-modal" className="modal-narrow" show={show}>
            <Modal.Dialog>
                <div className="modal-content">
                    <Modal.Header className="d-block">
                        <div className="row w-100">
                            <Button className="close" onClick={close}>
                                <span aria-hidden="true">&times;</span>
                            </Button>
                        </div>
                        <div className="row w-100 justify-content-center align-items-center">
                            <h4>비밀번호 찾기</h4>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <div className="row">
                                <div className="w-100">
                                    <div className="row">
                                        <div className="col-12 pt-2 pb-2">
                                            <label>아이디</label>
                                        </div>
                                        <div className="col-12">
                                            <input className="input w-100 pt-3 pb-3 rounded-0" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 pt-2 pb-2">
                                            <label>학교 이메일</label>
                                        </div>
                                        <div className="col-12">
                                            <input className="input w-100 pt-3 pb-3 rounded-0" />
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-12 pt-2 pb-2">
                                            <button className="btn btn-primary w-100 pt-3 pb-3 rounded-0">
                                                임시 비밀번호 발급
                                            </button>
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
