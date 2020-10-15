import React, { useEffect, useState } from 'react';

import { MajorSelector } from './MajorSelector';
import { TagList } from './TagList';
import { TagResultDisplay } from './TagResultDisplay';

const TagProcess = {
    MajorCategory: 'SetMajorCategory',
    SchoolSubject: 'SetSchoolSubject',
    Complete: 'Complete',
};

const getCurrentStep = step => {
    switch (step) {
        case TagProcess.MajorCategory:
            return '학과 계열 선택';
        case TagProcess.SchoolSubject:
            return '단원 및 학습 요소 선택';
        case TagProcess.Complete:
            return '완료';
    }
};

export const TagWizard = ({
    isLoaded,
    onComplete,
    setTags,
    tags,
    ...props
}) => {
    const [tagFlushed, setTagFlushed] = useState(false);
    const [currentStep, setCurrentStep] = useState(TagProcess.MajorCategory);
    const [majorCategories, setMajorCategories] = useState([]);

    const changeStep = to => {
        setCurrentStep(to);
    };

    const backwardToMajorCategorySelector = () => {
        changeStep(TagProcess.MajorCategory);
        setTagFlushed(true);
    };

    const forwardToSchoolSubjectSelector = majorCategories => {
        setMajorCategories(majorCategories);
        changeStep(TagProcess.SchoolSubject);
    };

    const forwardToComplete = tags => {
        setTags(tags);
        onComplete(tags);
        changeStep(TagProcess.Complete);
    };

    useEffect(() => {
        switch (currentStep) {
            case TagProcess.SchoolSubject:
                break;
            case TagProcess.SchoolSubjectUnit:
                break;
        }
    }, [currentStep]);

    useEffect(() => {
        if (!tagFlushed && isLoaded) {
            return;
        }
        setTags([
            ...majorCategories.map(majorCategory => ({
                majorCategory,
                schoolSubjects: [],
                schoolSubjectUnits: [],
                achievementStandards: [],
            })),
        ]);
        setTagFlushed(true);
    }, [majorCategories]);

    useEffect(() => {
        if (isLoaded) {
            const majorCategories = tags.map(tag => tag.majorCategory);
            setMajorCategories(majorCategories);
            setCurrentStep(TagProcess.SchoolSubject);
        }
    }, []);

    return (
        <>
            <div className="d-flex w-100 justify-content-end">
                <h5>{getCurrentStep(currentStep)}</h5>
            </div>
            {currentStep === TagProcess.MajorCategory ? (
                <MajorSelector next={forwardToSchoolSubjectSelector} />
            ) : currentStep === TagProcess.SchoolSubject ? (
                <TagList
                    tags={tags}
                    setTags={setTags}
                    back={backwardToMajorCategorySelector}
                    next={forwardToComplete}
                />
            ) : currentStep === TagProcess.Complete ? (
                <TagResultDisplay tags={tags} />
            ) : (
                <></>
            )}
        </>
    );
};
