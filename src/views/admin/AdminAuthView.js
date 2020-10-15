import React from 'react';

export const AdminAuthView = props => {
    return (
        <div className="w-100 mt-5">
            <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <div className="login-form col-4 p-1">
                    <div className="row d-flex align-items-center justify-content-center ">
                        <h2>로그인</h2>
                    </div>
                    <div className="row mt-3">
                        <div className=" col-12 pt-2 pb-2">
                            <label>아이디</label>
                        </div>
                        <div className="col-12">
                            <input className="input w-100 pt-3 pb-3 rounded-0" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 pt-2 pb-2">
                            <label>비밀번호</label>
                        </div>
                        <div className="col-12">
                            <input className="input w-100 pt-3 pb-3 rounded-0" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-8 offset-2 pt-2 pb-2">
                            <button className="btn btn-primary w-100 pt-3 pb-3 rounded-0">
                                로그인
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
