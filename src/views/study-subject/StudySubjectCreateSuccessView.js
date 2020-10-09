import React from 'react';

export const StudySubjectCreateSuccessView = props => (
    <div className="container-fluid">
        <div className="row h-100">
            <div className="w-100 h-100">
                <div className="h-80 d-flex justify-content-center align-items-center flex-column">
                    <h4>이론 작성이 완료되었습니다!</h4>
                    <h4>작성에 대한 결과는 24시간 이내에 통보됩니다.</h4>
                </div>
                <div className="h-20">
                    <div className="offset-3 col-6 justify-content-center align-items-center d-flex">
                        <button
                            type="button"
                            className="btn btn-primary btn-lg rounded-0 btn-block"
                        >
                            홈으로
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
