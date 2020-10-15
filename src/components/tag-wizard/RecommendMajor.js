import React from 'react';

export const RecommendMajor = props => {
    return (
        <div className="mt-5">
            <div className="mt-3">
                <h4>이 학과들도 해당이 되나요?</h4>
            </div>
            <div className="mt-4 row">
                <div className="col-4">
                    <h5 className="text-muted">국어교육과</h5>
                </div>
                <div className="col-4">
                    <h5 className="text-muted">사회교육과</h5>
                </div>
                <div className="col-4">
                    <h5 className="text-muted">물리교육과</h5>
                </div>
            </div>
        </div>
    );
};
