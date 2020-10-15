import React, { useState, useContext } from 'react';
import { AppContext } from 'Contexts';
import { generateUuid } from 'Utils';

import { AchievementStandardsSelector } from './AchievementStandardsSelector';

export const SchoolSubjectUnitSelector = ({
    addAchievementStandards,
    addSchoolSubjectUnit,
    schoolSubjectUuid,
    schoolSubjectName,
    toggle,
    ...props
}) => {
    const {
        researchAssistant,
        getters: { getSchoolSubjectUnit },
    } = useContext(AppContext);

    const [schoolSubjectUnit, setSchoolSubjectUnit] = useState(null);
    const [achievementStandards, setAchievementStandards] = useState([]);
    const [
        selectedAchievementStandards,
        setSelectedAchievementStandards,
    ] = useState([]);

    const schoolSubjectUnits = researchAssistant.schoolSubjectUnits.filter(
        ({ schoolSubject: _ }) => _ === schoolSubjectName,
    );

    const handleSchoolSubjectUnitClick = ({ id: schoolSubjectUnitId }) => {
        const schoolSubjectUnit = getSchoolSubjectUnit(schoolSubjectUnitId);
        const { achievementStandards } = schoolSubjectUnit;
        setAchievementStandards(achievementStandards);
        setSchoolSubjectUnit(schoolSubjectUnit);
    };

    const handleConfirmButtonClick = e => {
        const schoolSubjectUnitUuid = generateUuid();
        addSchoolSubjectUnit({
            ...schoolSubjectUnit,
            schoolSubjectUnitUuid,
        });
        addAchievementStandards(
            schoolSubjectUnitUuid,
            selectedAchievementStandards,
        );
        toggle();
    };

    return (
        <div className="mt-4 pr-5 pl-5">
            <div className="row">
                <div className="col-6 scroll border border-dark p-5">
                    {schoolSubjectUnits.map((_schoolSubjectUnit, index) => (
                        <div
                            key={index}
                            onClick={() =>
                                handleSchoolSubjectUnitClick(_schoolSubjectUnit)
                            }
                            className="mt-3 mb-3"
                        >
                            <h4
                                className={`${
                                    schoolSubjectUnit &&
                                    schoolSubjectUnit.name ===
                                        _schoolSubjectUnit.name
                                        ? 'text-dark'
                                        : 'text-muted'
                                }`}
                            >
                                {_schoolSubjectUnit.name}
                            </h4>
                        </div>
                    ))}
                </div>

                <AchievementStandardsSelector
                    achievementStandards={achievementStandards}
                    selectedAchievementStandards={selectedAchievementStandards}
                    setSelectedAchievementStandards={
                        setSelectedAchievementStandards
                    }
                />

                <div className="col-12 d-flex justify-content-end mt-3">
                    <button
                        type="button"
                        onClick={handleConfirmButtonClick}
                        className="btn btn-primary btn-lg rounded-0 "
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
};
