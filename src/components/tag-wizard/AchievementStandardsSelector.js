import React, { useState, useContext } from 'react';
import { AppContext } from 'Contexts';
import { generateUuid } from 'Utils';

export const AchievementStandardsSelector = ({
    achievementStandards,
    selectedAchievementStandards,
    setSelectedAchievementStandards,
    schoolSubjectUnit,
    ...props
}) => {
    const {
        getters: { getAchievementStandard },
    } = useContext(AppContext);

    const removeSelectedAchievementStandard = achievementStandard => {
        setSelectedAchievementStandards([
            ...selectedAchievementStandards.filter(
                ({ code }) => code !== achievementStandard.code,
            ),
        ]);
    };

    const addSelectedAchievementStandard = achievementStandard => {
        setSelectedAchievementStandards([
            ...selectedAchievementStandards,
            { ...achievementStandard, achievementStandardUuid: generateUuid() },
        ]);
    };

    const handleAchievementStandardClick = achievementStandard => {
        const handler = selectedAchievementStandards
            .map(({ code }) => code)
            .includes(achievementStandard.code)
            ? removeSelectedAchievementStandard
            : addSelectedAchievementStandard;

        const { code } = achievementStandard;
        handler({
            code,
        });
    };

    return (
        <div className="col-6 scroll border border-left-0 border-dark p-5">
            {achievementStandards.map(({ code }) => {
                const achievementStandard = getAchievementStandard(code);
                return (
                    <div
                        key={code}
                        onClick={() =>
                            handleAchievementStandardClick(achievementStandard)
                        }
                        className="mt-3 mb-3"
                    >
                        <span
                            className={`${
                                selectedAchievementStandards
                                    .map(({ code }) => code)
                                    .includes(achievementStandard.code)
                                    ? 'text-dark'
                                    : 'text-muted'
                            }`}
                        >
                            <span
                                className={`${
                                    selectedAchievementStandards
                                        .map(({ code }) => code)
                                        .includes(achievementStandard.code)
                                        ? 'text-dark'
                                        : 'text-muted'
                                }`}
                            >
                                {achievementStandard.description}
                            </span>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
