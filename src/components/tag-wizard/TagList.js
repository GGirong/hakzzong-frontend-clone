import React, { useState, useContext } from 'react';

import _ from 'lodash';
import { generateUuid } from 'Utils';
import { AppContext } from 'Contexts/';

import { SchoolSubject } from './SchoolSubject';
import { RecommendSchoolSubject } from './RecommendSchoolSubject';
import { AddSubjectUnitModalWrapper } from './AddSubjectUnitModalWrapper';
import { Navigator } from './Navigator';

const deepUuidClone = (tag, majorCategory) => {
    const copied = _.cloneDeep(tag);
    copied.majorCategory = majorCategory;

    const keys = {
        schoolSubjects: 'schoolSubjectUuid',
        schoolSubjectUnits: 'schoolSubjectUnitUuid',
        achievementStandards: 'achievementStandardUuid',
    };

    Object.entries(keys).forEach(([key, uuidKey]) => {
        copied[key].forEach(element => {
            const oldUuid = element[uuidKey];
            const newUuid = generateUuid();

            Object.keys(keys).map(k => {
                copied[k] = copied[k].map(e => {
                    if (e[uuidKey] === oldUuid) {
                        e[uuidKey] = newUuid;
                    }
                    return e;
                });
            });
        });
    });

    return copied;
};

export const TagList = ({ tags, setTags, back, next, ...props }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const {
        getters: { getMajorCategory, getSchoolSubject },
    } = useContext(AppContext);

    const getCopyHandler = tagIndex => () => {
        if (tagIndex === 0) {
            return;
        }

        setTags([
            ...tags.map((tag, index) =>
                index === tagIndex
                    ? deepUuidClone(tags[index - 1], tag.majorCategory)
                    : tag,
            ),
        ]);
    };

    const addSchoolSubject = tagIndex => schoolSubject => {
        setTags([
            ...tags.map((tag, index) => {
                if (index === tagIndex) {
                    tag.schoolSubjects = [
                        ...tag.schoolSubjects,
                        { ...schoolSubject },
                    ];
                }
                return tag;
            }),
        ]);
    };

    const addSchoolSubjectUnit = (
        tagIndex,
        schoolSubjectUuid,
    ) => schoolSubjectUnit => {
        setTags([
            ...tags.map((tag, index) => {
                if (index === tagIndex) {
                    tag.schoolSubjectUnits = [
                        ...tag.schoolSubjectUnits,
                        {
                            schoolSubjectUuid,
                            ...schoolSubjectUnit,
                        },
                    ];
                }
                return tag;
            }),
        ]);
    };

    const addAchievementStandards = (tagIndex, schoolSubjectUuid) => (
        schoolSubjectUnitUuid,
        achievementStandards,
    ) => {
        setTags([
            ...tags.map((tag, index) => {
                if (index === tagIndex) {
                    tag.achievementStandards = [
                        ...tag.achievementStandards,
                        ...achievementStandards.map(achievementStandard => ({
                            schoolSubjectUuid,
                            schoolSubjectUnitUuid,
                            ...achievementStandard,
                        })),
                    ];
                }
                return tag;
            }),
        ]);
    };

    console.log(tags);
    return (
        <>
            {tags.map((tag, index) =>
                index === currentIndex ? (
                    <>
                        <div key={index} className="mt-3">
                            <div className="mt-5">
                                <div className="mt-3">
                                    <h4>위의 주제는</h4>
                                </div>
                                <div className="col-3 mt-5">
                                    <h5 className="border text-center border-dark pt-3 pb-3">
                                        {
                                            getMajorCategory(tag.majorCategory)
                                                .subcategoryName
                                        }
                                    </h5>
                                </div>
                                <div className="mt-5">
                                    <h4>학과에 가고싶은 학생에게 적절해요</h4>
                                </div>
                            </div>
                            {tag.schoolSubjects.map(
                                ({ id, schoolSubjectUuid }, key) => {
                                    const schoolSubjectName = getSchoolSubject(
                                        id,
                                    ).name;
                                    return (
                                        <div key={`${key + index}`}>
                                            <div className="mt-5 row">
                                                <div className="col-6">
                                                    <h5 className="border text-center border-dark pt-3 pb-3">
                                                        {schoolSubjectName}
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <h4>단원 선택</h4>
                                            </div>
                                            <SchoolSubject
                                                tag={tag}
                                                addSchoolSubjectUnit={addSchoolSubjectUnit(
                                                    index,
                                                    schoolSubjectUuid,
                                                )}
                                                addAchievementStandards={addAchievementStandards(
                                                    index,
                                                    schoolSubjectUuid,
                                                )}
                                                schoolSubjectUuid={
                                                    schoolSubjectUuid
                                                }
                                                schoolSubjectName={
                                                    schoolSubjectName
                                                }
                                            />
                                        </div>
                                    );
                                },
                            )}
                            <hr className="border border-dark mt-5" />
                            <RecommendSchoolSubject />
                            <div className="mt-5">
                                <div className="form-row mt-3">
                                    <div className="col-6">
                                        <AddSubjectUnitModalWrapper
                                            tagIndex={index}
                                            handleCopy={getCopyHandler(index)}
                                            addSchoolSubject={addSchoolSubject(
                                                index,
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <></>
                ),
            )}
            <Navigator
                back={() => back()}
                next={() => next(tags)}
                tagLength={tags.length}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
        </>
    );
};
