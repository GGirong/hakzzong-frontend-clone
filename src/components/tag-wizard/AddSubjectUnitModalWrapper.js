import React from 'react';
import { SearchRelatedSchoolSubjectsModal, useModal } from 'Components/modals';

export const AddSubjectUnitModalWrapper = ({
    tagIndex,
    handleCopy,
    addSchoolSubject,
    ...props
}) => {
    const searchRelatedSchoolSubjectsModal = useModal();
    const handleButtonClick = e => {
        if (tagIndex !== 0 && confirm('이전 단원 불러오겠습니까?')) {
            handleCopy();
            return;
        }
        searchRelatedSchoolSubjectsModal.open();
    };

    return (
        <>
            <button
                onClick={handleButtonClick}
                className="w-60 btn btn-outline-secondary pt-0 pb-0 rounded-0"
            >
                단원추가
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="display-4 bi bi-plus"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    />
                </svg>
            </button>
            <SearchRelatedSchoolSubjectsModal
                addSchoolSubject={addSchoolSubject}
                {...searchRelatedSchoolSubjectsModal}
            />
        </>
    );
};
