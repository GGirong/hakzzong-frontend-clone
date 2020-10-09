import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AppContext } from 'Contexts/AppContext';
import { useModal } from 'Hooks';
import { RegisterModal } from 'Components/modals';

export const MainView = props => {
    const {
        state: { user },
        dispatchers: appContextDispatchers,
        apiCallers,
    } = useContext(AppContext);

    const registerModal = useModal();

    const history = useHistory();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e, setter) => setter(e.target.value);

    const handleLoginButtonClick = e => {
        apiCallers.login({
            username,
            password,
        });
    };

    const openRegisterModal = () => {
        appContextDispatchers.openModal;
    };

    useEffect(() => {
        if (user.username) {
            history.push('/missions');
        }
    }, [user]);

    return (
        <>
            <section>
                <div className="row mr-0 ml-0 h-40">
                    <div className="p-2 col-lg-4 h-100">
                        <div className="login-form border p-3 h-100">
                            <div className="row">
                                <div className="col-12 pt-2 pb-2">
                                    <label>아이디</label>
                                </div>
                                <div className="col-12">
                                    <input
                                        onChange={e =>
                                            handleChange(e, setUserName)
                                        }
                                        className="input w-100 pt-3 pb-3 rounded-0"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 pt-2 pb-2">
                                    <label>비밀번호</label>
                                </div>
                                <div className="col-12">
                                    <input
                                        onChange={e =>
                                            handleChange(e, setPassword)
                                        }
                                        type="password"
                                        className="input w-100 pt-3 pb-3 rounded-0"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 pt-2 pb-2">
                                    <div className="d-flex  flex-column w-100 align-items-end justify-content-end">
                                        <a
                                            id="register-btn"
                                            className="pt-2"
                                            href="#"
                                            onClick={e => registerModal.open()}
                                        >
                                            <label>회원가입</label>
                                        </a>
                                        <a
                                            id="find-password-btn"
                                            className="pt-2"
                                            href="#"
                                        >
                                            <label>비밀번호 찾기</label>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 pt-2 pb-2">
                                    <button
                                        onClick={handleLoginButtonClick}
                                        className="btn btn-primary w-100 pt-3 pb-3 rounded-0"
                                    >
                                        로그인
                                    </button>
                                </div>
                            </div>
                        </div>
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
        </>
    );
};
