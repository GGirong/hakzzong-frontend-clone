import React, { useContext } from 'react';

import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { useAPI, APIRoute, ErrorCode } from 'Client';
import { AppContext } from 'Contexts/AppContext';
import { FindPasswordModal, RegisterModal, useModal } from 'Components/modals';

export const MainView = () => {
    const { dispatchers } = useContext(AppContext);

    const registerModal = useModal();
    const findPasswordModal = useModal();

    const { register, handleSubmit, errors: formErrors } = useForm();

    const loginAPI = useAPI(APIRoute.Common.Auth.Login, {
        callbacks: {
            onSuccess: result => {
                const { researchAssistantProfile, ...user } = result;
                dispatchers.user.set(user);
                dispatchers.researchAssistant.setProfile(
                    researchAssistantProfile,
                );
            },
            // example of api error handling
            onError: error => {
                switch (error.code) {
                    case ErrorCode.NO_USER:
                        alert('존재하지 않는 회원입니다.');
                        break;
                    default:
                        alert(error.message);
                }
            },
        },
    });

    const onSubmit = data => {
        loginAPI.send({
            username: data.username,
            password: data.password,
        });
    };

    return (
        <>
            <section>
                <div className="row mr-0 ml-0">
                    <div className="p-2 col-lg-4 h-100">
                        <Form
                            onSubmit={handleSubmit(onSubmit)}
                            className="login-form border p-3 h-100"
                        >
                            <div className="row">
                                <div className="col-12 pt-2 pb-2 login-label">
                                    <label>아이디</label>
                                </div>
                                <div className="col-12">
                                    <input
                                        name="username"
                                        className="input w-100 pt-3 pb-3 rounded-0 login-input"
                                        ref={register}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 pt-2 pb-2 login-label">
                                    <label>비밀번호</label>
                                </div>
                                <div className="col-12">
                                    <input
                                        name="password"
                                        type="password"
                                        className="input w-100 pt-3 pb-3 rounded-0 login-input"
                                        ref={register}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 pt-2 pb-2">
                                    <button
                                        type="submit"
                                        className="btn-main-color w-100 pt-3 pb-3"
                                    >
                                        로그인
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 pt-2 pb-2">
                                    <div className="d-flex  flex-column w-100 align-items-end justify-content-end">
                                        <a
                                            id="find-password-btn"
                                            className="pt-1 finding-label"
                                            href="#"
                                            onClick={findPasswordModal.open}
                                        >
                                            <label className="cursor-pointer">비밀번호 찾기</label>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="line border-bottom"></div>
                            <div className="row">
                                <div className="col-12 pt-4">
                                    <div className="d-flex w-100 align-items-center justify-content-center pt-3">
                                        <a
                                            id="register-btn"
                                            className="reister-label pt-1"
                                            href="#"
                                            onClick={registerModal.open}
                                        >
                                            <label className="cursor-pointer">무료 회원가입</label>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                    <div className="p-2 col-lg-8 h-100">
                        <div className="d-flex justify-content-center align-items-center border h-100">
                            집에서 돈 벌자!
                        </div>
                    </div>
                </div>
                <div className="row mr-0 ml-0 h-40">
                    <div className="p-2 col-12">
                        <div className="d-flex justify-content-center align-items-center h-100 border">
                            RA 사이트 소개 내용
                        </div>
                    </div>
                </div>
            </section>
            <RegisterModal {...registerModal} />
            <FindPasswordModal {...findPasswordModal} />
        </>
    );
};
