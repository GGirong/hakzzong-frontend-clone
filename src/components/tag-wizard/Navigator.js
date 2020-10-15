import React from 'react';

export const Navigator = ({
    back,
    next,
    currentIndex,
    setCurrentIndex,
    tagLength,
    ...props
}) => {
    const handlePreviousButtonClick = e => {
        if (currentIndex === 0) {
            return;
        }
        setCurrentIndex(currentIndex - 1);
    };

    const handleNextButtonClick = e => {
        if (currentIndex === tagLength) {
            return;
        }
        setCurrentIndex(currentIndex + 1);
    };

    const handleFlushTagsButtonClick = () => {
        if (!confirm('모든 정보가 소실됩니다.')) {
            return;
        }
        back();
    };
    const handleCompleteButtonClick = () => {
        next();
    };

    return (
        <div className="mt-5 row">
            <div className="col-6 justify-content-start align-items-center d-flex">
                {currentIndex === 0 ? (
                    <>
                        <div className="col-6 justify-content-center align-items-center d-flex">
                            <button
                                type="button"
                                className="btn btn-primary btn-lg rounded-0 btn-block position-relative"
                                onClick={handleFlushTagsButtonClick}
                            >
                                태깅 재시작
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="col-6 justify-content-center align-items-center d-flex">
                            <button
                                type="button"
                                className="btn btn-primary btn-lg rounded-0 btn-block position-relative"
                                onClick={handlePreviousButtonClick}
                            >
                                이전
                            </button>
                        </div>
                    </>
                )}
            </div>
            <div className="col-6 justify-content-end align-items-center d-flex">
                {currentIndex !== tagLength - 1 ? (
                    <div className="col-6 justify-content-center align-items-center d-flex">
                        <button
                            type="button"
                            className="btn btn-primary btn-lg rounded-0 btn-block position-relative"
                            onClick={handleNextButtonClick}
                        >
                            다음
                        </button>
                    </div>
                ) : (
                    <div className="col-6 justify-content-center align-items-center d-flex">
                        <button
                            type="button"
                            className="btn btn-primary btn-lg rounded-0 btn-block position-relative"
                            onClick={handleCompleteButtonClick}
                        >
                            태깅 완료하기
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
