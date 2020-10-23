import React from 'react';

import { Container, Row, Col, Modal, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { useAPI, APIRoute } from 'Client';

export const RegisterModal = ({ isOpen = false, close }) => {
    const validateUsernameAPI = useAPI(APIRoute.Common.Auth.ValidateUsername);
    const registerAPI = useAPI(APIRoute.ResearchAssistant.Auth.Register, {
        callbacks: {
            onSuccess: data => {
                alert(`${data.user.username} 님의 가입을 축하드립니다!`);
                close();
            },
            onError: error => console.error(error),
        },
    });

    const { register, watch, handleSubmit, errors: formErrors } = useForm();
    const watchFields = watch(['username', 'password', 'passwordConfirmation']);

    const onSubmit = data => {
        registerAPI.send({
            user: {
                name: data.name,
                username: data.username,
                password: data.password,
                email: data.email,
            },
        });
    };

    const handleUsernameValidationButtonClick = async e => {
        e.preventDefault();
        await validateUsernameAPI.send({ username: watchFields.username });
    };

    return (
        <Modal id="register-modal" show={isOpen} onHide={close}>
            <Modal.Header className="d-block">
                <Row className="w-100">
                    <Button className="close" onClick={close}>
                        <span aria-hidden="true">&times;</span>
                    </Button>
                </Row>
                <Row className="w-100 justify-content-center align-items-center">
                    <h4>회원가입</h4>
                </Row>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <div className="w-100">
                                <div className="register-modal-info col-12 pt-1 pl-0">
                                    <p>*처리된 항목은 필수 항목입니다.</p>
                                </div>
                                <Form.Row>
                                    <div className="register-modal-label col-12 pt-2 pb-2">
                                        <label>*아이디</label>
                                    </div>
                                    <div className="col-8">
                                        <input
                                            name="username"
                                            className="register-modal-input input w-100 pt-3 pb-3 rounded-0"
                                            ref={register}
                                        />
                                        {validateUsernameAPI.error && (
                                            <small className="form-text text-danger">
                                                이 아이디는 사용하실 수
                                                없습니다.
                                            </small>
                                        )}
                                    </div>
                                    <div className="col-4">
                                        <Button
                                            onClick={
                                                handleUsernameValidationButtonClick
                                            }
                                            variant={'warning'}
                                            className="w-100 pt-2 pb-2 btn-main-color"
                                        >
                                            중복확인
                                        </Button>
                                    </div>
                                </Form.Row>
                                <Form.Row>
                                    <div className="register-modal-label col-12 pt-2 pb-2">
                                        <label>*비밀번호</label>
                                    </div>
                                    <div className="col-12">
                                        <input
                                            name="password"
                                            type="password"
                                            className="register-modal-input input w-100 pt-3 pb-3 rounded-0"
                                            ref={register}
                                        />
                                    </div>
                                </Form.Row>
                                <Form.Row>
                                    <div className="register-modal-label col-12 pt-2 pb-2">
                                        <label>*비밀번호 확인</label>
                                    </div>
                                    <div className="col-12">
                                        <input
                                            name="passwordConfirmation"
                                            type="password"
                                            className="register-modal-input input w-100 pt-3 pb-3 rounded-0"
                                            ref={register}
                                        />
                                        {watchFields.passwordConfirmation &&
                                            watchFields.password !==
                                                watchFields.passwordConfirmation && (
                                                <small className="form-text text-danger">
                                                    비밀번호가 일치하지
                                                    않습니다.
                                                </small>
                                            )}
                                    </div>
                                </Form.Row>
                                <Form.Row>
                                    <div className="register-modal-label col-12 pt-2 pb-2">
                                        <label>*이름</label>
                                    </div>
                                    <div className="col-12">
                                        <input
                                            name="name"
                                            type="text"
                                            className="register-modal-input input w-100 pt-3 pb-3 rounded-0"
                                            ref={register}
                                        />
                                    </div>
                                </Form.Row>
                                <Form.Row>
                                    <div className="register-modal-label col-12 pt-2 pb-2">
                                        <label>*휴대폰번호</label>
                                    </div>
                                    <div className="col-12">
                                        <input
                                            name="phone"
                                            type="text"
                                            className="register-modal-input input w-100 pt-3 pb-3 rounded-0"
                                            ref={register}
                                        />
                                    </div>
                                </Form.Row>
                                <Form.Row>
                                    <div className="register-modal-label col-12 pt-2 pb-2">
                                        <label>*대학교/대학원</label>
                                    </div>
                                    <div className="col-12">
                                        <input
                                            name="university"
                                            type="text"
                                            className="register-modal-input input w-100 pt-3 pb-3 rounded-0"
                                            ref={register}
                                        />
                                    </div>
                                </Form.Row>
                                <Form.Row>
                                    <div className="register-modal-label col-12 pt-2 pb-2">
                                        <label>*학과</label>
                                    </div>
                                    <div className="col-12">
                                        <input
                                            name="major"
                                            type="text"
                                            className="register-modal-input input w-100 pt-3 pb-3 rounded-0"
                                            ref={register}
                                        />
                                    </div>
                                </Form.Row>
                                <Form.Row>
                                    <div className="register-modal-label col-12 pt-2 pb-2">
                                        <label>*학년 - 학기</label>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            name="grade"
                                            type="text"
                                            className="register-modal-input input w-100 pt-3 pb-3 rounded-0"
                                            ref={register}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <input
                                            name="semester"
                                            type="text"
                                            className="register-modal-input input w-100 pt-3 pb-3 rounded-0"
                                            ref={register}
                                        />
                                    </div>
                                </Form.Row>
                                <Form.Row>
                                    <div className="register-modal-label col-12 pt-2 pb-2">
                                        <label>*학교 이메일</label>
                                    </div>
                                    <div className="col-12">
                                        <input
                                            name="email"
                                            type="email"
                                            className="register-modal-input input w-100 pt-3 pb-3 rounded-0"
                                            ref={register}
                                        />
                                    </div>
                                </Form.Row>

                                <h6 className="mt-3 mb-3">우대 사항</h6>
                                <Form.Row className="ml-2">
                                    <div className="register-modal-label col-12 pl-0">
                                        <label>학생부종합전형 준비 경험 여부</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            name="hasPreparedForA"
                                            className="form-check-input checkbox checkbox-lg"
                                            type="checkbox"
                                            ref={register}
                                        />
                                        <label className="form-check-label">
                                            예
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            name="hasNotPreparedForA"
                                            className="form-check-input checkbox checkbox-lg"
                                            type="checkbox"
                                            ref={register}
                                        />
                                        <label className="form-check-label">
                                            아니오
                                        </label>
                                    </div>
                                </Form.Row>
                                <Form.Row className="ml-2">
                                    <div className="register-modal-label col-12 mt-3 pl-0">
                                        <label>학생부종합전형 합격 경험 여부</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input checkbox checkbox-lg"
                                            type="checkbox"
                                            value="option1"
                                        />
                                        <label className="form-check-label">
                                            예
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input checkbox checkbox-lg"
                                            type="checkbox"
                                            value="option2"
                                        />
                                        <label className="form-check-label">
                                            아니오
                                        </label>
                                    </div>
                                </Form.Row>
                            </div>
                        </Row>
                        <Row className="justify-content-center mt-5">
                            <Col md={8} className="pt-2 pb-2">
                                <Button
                                    type="submit"
                                    variant={'primary'}
                                    className="w-100 pt-3 pb-3 btn-main-color"
                                >
                                    학교 이메일 인증하기
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Modal.Body>
        </Modal>
    );
};
