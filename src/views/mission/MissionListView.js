import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Pen } from 'react-bootstrap-icons';

import { useAPI, APIRoute } from 'Client';

const mapMissionType = type => {
    switch (type) {
        case 'CONCEPT':
            return '탐구이론';
        case 'CONCEPT_RFP':
            return '탐구이론 RFP';
        case 'STUDY_SUBJECT':
            return '탐구문제';
        case 'STUDY_SUBJECT_RFP':
            return '탐구문제 RFP';
        default:
            return type;
    }
};

export const MissionListView = () => {
    const [missions, setMissions] = useState([]);
    const [missionReports, setMissionReports] = useState([]);
    const history = useHistory();

    const missionListAPI = useAPI(APIRoute.ResearchAssistant.Mission.List, {
        callbacks: { onSuccess: setMissions },
    });

    const missionReportListAPI = useAPI(
        APIRoute.ResearchAssistant.MissionReport.List,
        {
            callbacks: {
                onSuccess: setMissionReports,
            },
        },
    );

    const gotoMissionDetail = mission =>
        history.push({
            pathname: `/missions/${mission.id}/`,
            state: { entity: mission },
        });

    const gotoMissionReportDetail = missionReport => {
        const {
            mission: { type: missionType },
        } = missionReport;

        if (missionType === 'STUDY_SUBJECT') {
            history.push({
                pathname: `/study-subjects/${missionReport.id}/patch/`,
                state: { entity: missionReport },
            });
        } else if (missionType === 'CONCEPT') {
            history.push({
                pathname: '/concepts/create/',
                state: { entity: missionReport },
            });
        }
    };

    useEffect(() => {
        missionListAPI.send();
        missionReportListAPI.send({ isSubmitted: false });
    }, []);

    return (
        <div className="container">
            <div className="row mission-type w-100">
                <div className="col-4 border-bottom border-dark p-0">
                    <h4 className="text-bold">진행중인 미션</h4>
                </div>
            </div>
            <div className="row mr-0 ml-0 h-40 p-0">
                {missionReports.length === 0 ? (
                    <div>
                        <span>진행중인 미션이 없습니다.</span>
                    </div>
                ) : (
                    missionReports.map(missionReport => (
                        <div
                            className="card mission p-2 m-2 rounded-0"
                            key={missionReport.id}
                        >
                            <div className="card-body">
                                <div className="row h-10">
                                    <Pen
                                        onClick={() =>
                                            gotoMissionReportDetail(
                                                missionReport,
                                            )
                                        }
                                    />
                                </div>
                                <div className="row align-items-center justify-content-center h-70">
                                    <h4 className="text-center">
                                        {`${mapMissionType(
                                            missionReport.mission.type,
                                        )} ${missionReport.id} ${
                                            missionReport.submitted
                                                ? '작성중'
                                                : ''
                                        }`}
                                        작성
                                    </h4>
                                </div>
                                <div className="row h-20">
                                    <div className="progress">
                                        <div
                                            className="progress-bar w-25"
                                            role="progressbar"
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="row mr-0 ml-0 mission-type w-100">
                <div className="col-4 border-bottom border-dark p-0">
                    <h4 className="text-bold">진행 가능한 미션</h4>
                </div>
            </div>
            <div className="row mr-0 ml-0 h-40 p-0">
                {missions.length === 0 ? (
                    <div>
                        <span>진행 가능한 미션이 없습니다.</span>
                    </div>
                ) : (
                    missions.map(mission => (
                        <div
                            className="card mission p-2 m-2 rounded-0"
                            key={mission.id}
                        >
                            <div className="card-body">
                                <div className="row h-10">
                                    <Pen
                                        onClick={() =>
                                            gotoMissionDetail(mission)
                                        }
                                    />
                                </div>
                                <div className="row align-items-center justify-content-center h-70">
                                    <h4 className="text-center">
                                        {mapMissionType(mission.type)} 작성
                                    </h4>
                                </div>
                                <div className="row h-20">
                                    <div className="progress">
                                        <div
                                            className="progress-bar w-25"
                                            role="progressbar"
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
