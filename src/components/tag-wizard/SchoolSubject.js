import React, { useState, useContext } from 'react';
import { AppContext } from 'Contexts';
import { SchoolSubjectUnit } from './SchoolSubjectUnit';
import { SchoolSubjectUnitSelector } from './SchoolSubjectUnitSelector';

export const SchoolSubject = ({
    tag,
    addSchoolSubjectUnit,
    addAchievementStandards,
    schoolSubjectUuid,
    schoolSubjectName,
    ...props
}) => {
    const {
        getters: { getSchoolSubject },
    } = useContext(AppContext);

    const [
        isAchievementStandardActive,
        setIsAchievementStandardActive,
    ] = useState(false);

    const schoolSubjectUnits = tag.schoolSubjectUnits.filter(
        ({ schoolSubjectUuid: _ }) => _ === schoolSubjectUuid,
    );

    return (
        <div>
            {schoolSubjectUnits.map((schoolSubjectUnit, index) => (
                <SchoolSubjectUnit
                    key={index}
                    tag={tag}
                    schoolSubjectUuid={schoolSubjectUuid}
                    schoolSubjectUnit={schoolSubjectUnit}
                />
            ))}
            {isAchievementStandardActive ? (
                <>
                    <SchoolSubjectUnitSelector
                        addAchievementStandards={addAchievementStandards}
                        addSchoolSubjectUnit={addSchoolSubjectUnit}
                        schoolSubjectUuid={schoolSubjectUuid}
                        schoolSubjectName={schoolSubjectName}
                        toggle={() => setIsAchievementStandardActive(false)}
                    />
                </>
            ) : (
                <div className="col-4 mt-5">
                    <button
                        onClick={() => setIsAchievementStandardActive(true)}
                        className="w-60 btn btn-outline-secondary pt-0 pb-0 rounded-0"
                    >
                        학습요소 추가
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
                </div>
            )}
            <div className="mt-3 row">
                <h5 className="text-center pt-3 pb-3">
                    과목에서 발표하기 좋은 과제입니다.
                </h5>
            </div>
        </div>
    );
};
