import React, { useContext } from 'react';
import { AppContext } from 'Contexts';

export const TagResultDisplay = ({ tags, ...props }) => {
    const {
        getters: {
            getMajorCategory,
            getSchoolSubject,
            getSchoolSubjectUnit,
            getAchievementStandard,
        },
    } = useContext(AppContext);
    return (
        <>
            {tags.map(
                (
                    {
                        majorCategory: majorCategoryId,
                        schoolSubjects,
                        schoolSubjectUnits,
                        achievementStandards,
                    },
                    tagIndex,
                ) => {
                    const majorCategory = getMajorCategory(majorCategoryId);
                    return (
                        <div key={tagIndex} className="mt-4 pr-5 pl-5">
                            <div className="row">
                                <div className="col-12 scroll border border-dark p-5">
                                    <h4>{majorCategory.subcategoryName}</h4>
                                    <div>
                                        {schoolSubjects.map(
                                            ({ schoolSubjectUuid, id }) => {
                                                const schoolSubject = getSchoolSubject(
                                                    id,
                                                );
                                                return (
                                                    <div
                                                        key={schoolSubjectUuid}
                                                        className="pl-5"
                                                    >
                                                        <h5>
                                                            {schoolSubject.name}
                                                        </h5>
                                                        <div className="pl-5">
                                                            {schoolSubjectUnits
                                                                .filter(
                                                                    ({
                                                                        schoolSubjectUuid: _,
                                                                    }) =>
                                                                        _ ===
                                                                        schoolSubjectUuid,
                                                                )
                                                                .map(
                                                                    ({
                                                                        schoolSubjectUnitUuid,
                                                                        name,
                                                                    }) => {
                                                                        return (
                                                                            <div
                                                                                key={
                                                                                    schoolSubjectUnitUuid
                                                                                }
                                                                                className="pl-5"
                                                                            >
                                                                                <span>
                                                                                    {
                                                                                        name
                                                                                    }
                                                                                </span>
                                                                                <div className="pl-5">
                                                                                    {achievementStandards
                                                                                        .filter(
                                                                                            ({
                                                                                                schoolSubjectUnitUuid: _schoolSubjectUnitUuid,
                                                                                                schoolSubjectUuid: _schoolSubjectUuid,
                                                                                            }) =>
                                                                                                _schoolSubjectUnitUuid ===
                                                                                                    schoolSubjectUnitUuid &&
                                                                                                _schoolSubjectUuid ===
                                                                                                    schoolSubjectUuid,
                                                                                        )
                                                                                        .map(
                                                                                            ({
                                                                                                code,
                                                                                            }) => {
                                                                                                const achievementStandard = getAchievementStandard(
                                                                                                    code,
                                                                                                );
                                                                                                return (
                                                                                                    <span
                                                                                                        key={
                                                                                                            code
                                                                                                        }
                                                                                                    >
                                                                                                        {
                                                                                                            achievementStandard.description
                                                                                                        }
                                                                                                    </span>
                                                                                                );
                                                                                            },
                                                                                        )}
                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    },
                                                                )}
                                                        </div>
                                                    </div>
                                                );
                                            },
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                },
            )}
        </>
    );
};
