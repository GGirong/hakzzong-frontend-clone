import React from 'react';
import {
    NavLinks,
    StudySubjectTable,
    ResearchAssistantTable,
    StudentTable,
    WithdrawalTable,
    MissionTable,
} from 'Components/admin';

export const mapPathToTableComponent = url => {
    if (url.match(/admin\/missions/)) {
        return MissionTable;
    } else if (url.match(/admin\/research-assistants/)) {
        return ResearchAssistantTable;
    } else if (url.match(/admin\/students/)) {
        return StudentTable;
    } else if (url.match(/admin\/withdrawals/)) {
        return WithdrawalTable;
    } else if (url.match(/admin\/missions/) || url.match(/admin/)) {
        return StudySubjectTable;
    } else {
        return () => <></>;
    }
};

export const AdminListView = ({ location: { pathname }, ...props }) => {
    const TableComponent = mapPathToTableComponent(pathname);
    return (
        <>
            <NavLinks />
            <TableComponent />
        </>
    );
};
