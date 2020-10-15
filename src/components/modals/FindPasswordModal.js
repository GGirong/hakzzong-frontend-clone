import React, { useState } from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { useAPI, APIRoute } from 'Client';

export const FindPasswordModal = ({
    show = false,
    open = () => {},
    close = () => {},
}) => {
    const { findPassword, watch, handleSubmit, errors: formErrors } = useForm();
    const findPasswordAPI = useAPI(APIRoute.Common.Auth.FindPassword, {
        callbacks: {
            onSuccess: data => {
                alert(`등록된 메일로 새로운 비밀번호를 보냈습니다.`);
                close();
            },
            onError: error => console.error(error),
        },
    });

    const onSubmit = data => {
        findPasswordAPI.send({
            username: data.username,
            email: data.email,
        });
    };

    return (
        <Modal id="find-password-modal" className="modal-narrow" show={show}>
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
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="w-100">
                                <div className="row">
                                    <div className="col-12 pt-2 pb-2">
                                        <label>아이디</label>
                                    </div>
                                    <div className="col-12">
                                        <input
                                            name="username"
                                            className="input w-100 pt-3 pb-3 rounded-0"
                                            ref={findPassword}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 pt-2 pb-2">
                                        <label>학교 이메일</label>
                                    </div>
                                    <div className="col-12">
                                        <input
                                            name="email"
                                            className="input w-100 pt-3 pb-3 rounded-0"
                                            ref={findPassword}
                                        />
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
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    );
};
