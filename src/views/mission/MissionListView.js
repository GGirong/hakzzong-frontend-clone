import React, { useEffect, useContext } from 'react';
import { AppContext } from 'Contexts/';

export const MissionListView = props => {
    const {
        state: { missions, missionReports },
        dispatchers: { setMissions, setMissionReports },
        apiCallers: { getMissions, getMissionReports },
    } = useContext(AppContext);

    useEffect(() => {
        const init = async () => {
            await getMissions();
            await getMissionReports();
        };

        init();
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
                    <></>
                )}
                {missionReports.map(missionReport => (
                    <div className="card mission p-2 m-2 rounded-0">
                        <div className="card-body">
                            <div className="row h-10">
                                <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    className="bi bi-pen"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"
                                    />
                                </svg>
                            </div>
                            <div className="row align-items-center justify-content-center h-70">
                                <h4 className="text-center">탐구 문제 작성</h4>
                                <h6 className="text-center">
                                    진행 가능한 미션1
                                </h6>
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
                ))}
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
                    <></>
                )}
                {missions.map(missionReport => (
                    <div className="card mission p-2 m-2 rounded-0">
                        <div className="card-body">
                            <div className="row h-10">
                                <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    className="bi bi-pen"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"
                                    />
                                </svg>
                            </div>
                            <div className="row align-items-center justify-content-center h-70">
                                <h4 className="text-center">탐구 문제 작성</h4>
                                <h6 className="text-center">
                                    진행 가능한 미션1
                                </h6>
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
                ))}
            </div>
        </div>
    );
};
