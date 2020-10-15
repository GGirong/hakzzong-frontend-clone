import React, { useState, useContext } from 'react';

import { Modal, Button } from 'react-bootstrap';
import { transpose, pad2DArray } from 'Utils';
import { AppContext } from 'Contexts';
import { generateUuid } from 'Utils';

export const SearchRelatedSchoolSubjectsModal = ({
    addSchoolSubject,
    isOpen = false,
    close,
}) => {
    const {
        researchAssistant: { schoolSubjects },
    } = useContext(AppContext);

    const reshapeSchoolSubject = () => {
        const reshaped = [];
        Object.entries(schoolSubjects).map(([key, array]) => {
            reshaped.push(array);
        });
        return transpose(reshaped) || [];
    };

    const handleSchoolSubjectClick = schoolSubject => {
        const { name, id } = schoolSubject;
        addSchoolSubject({
            schoolSubjectUuid: generateUuid(),
            id,
        });
        close();
    };

    return (
        <Modal
            show={isOpen}
            onHide={close}
            id="select-related-subjects-modal"
            className="modal-select-relatives"
        >
            <Modal.Header>
                <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={close}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                {Object.keys(schoolSubjects).map(
                                    (schoolSubject, index) => (
                                        <td key={index} className="text-muted">
                                            {schoolSubject}
                                        </td>
                                    ),
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {reshapeSchoolSubject().map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map(
                                        (col, colIndex) =>
                                            col && (
                                                <td
                                                    key={colIndex}
                                                    onClick={() =>
                                                        handleSchoolSubjectClick(
                                                            col,
                                                        )
                                                    }
                                                    className="text-muted"
                                                >
                                                    {col.name}
                                                </td>
                                            ),
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Modal.Body>
        </Modal>
    );
};
