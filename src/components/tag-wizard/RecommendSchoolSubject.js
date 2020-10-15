import React from 'react';

export const RecommendSchoolSubject = props => {
    return (
        <>
            <div className="mt-5">
                <div className="mt-3">
                    <h4>이 단원들도 해당이 되나요?</h4>
                </div>
                <div className="mt-4 row">
                    <div className="col-4">
                        <h5 className="text-muted">
                            언어와 매체/1.화법과 작문(+200p)
                        </h5>
                    </div>
                    <div className="col-4">
                        <h5 className="text-muted">
                            수학 1/2.미분과 적분(+300p)
                        </h5>
                    </div>
                    <div className="col-4">
                        <h5 className="text-muted">
                            물리 1/5.작용과 반작용(+500p)
                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
};
