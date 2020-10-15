import React, { useContext } from 'react';
import { AppContext } from 'Contexts';

export const SchoolSubjectUnit = ({
    tag,
    schoolSubjectUuid,
    schoolSubjectUnit,
    ...props
}) => {
    const {
        getters: { getSchoolSubjectUnit, getAchievementStandard },
    } = useContext(AppContext);

    const achievementStandards = tag.achievementStandards.filter(
        ({
            schoolSubjectUuid: _schoolSubjectUuid,
            schoolSubjectUnitUuid: _schoolSubjectUnitUuid,
        }) =>
            _schoolSubjectUuid === schoolSubjectUuid &&
            _schoolSubjectUnitUuid === schoolSubjectUnit.schoolSubjectUnitUuid,
    );

    return (
        <div>
            <div className="row mt-3">
                <div className="col-12 border border-dark p-3">
                    <h4>
                        {schoolSubjectUnit &&
                            getSchoolSubjectUnit(schoolSubjectUnit.id).name}
                    </h4>
                    <div className="pl-3">
                        {achievementStandards.map(({ code }, idx) => {
                            const achievementStandard = getAchievementStandard(
                                code,
                            );
                            return (
                                <h5 key={idx}>
                                    {achievementStandard.description}
                                </h5>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
