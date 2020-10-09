import React, { useState } from 'react';

import { Modal, Button } from 'react-bootstrap';

export const SearchRelatedSubjectsModal = ({
    show = false,
    open = () => {},
    close = () => {},
}) => {
    return (
        <Modal
            id="select-related-subjects-modal"
            className="modal-select-relatives"
        >
            <Modal.Dialog>
                <div className="modal-content">
                    <Modal.Header>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>국어</th>
                                        <th>수학</th>
                                        <th>사회</th>
                                        <th>과학</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-muted">인문</td>
                                        <td>문어</td>
                                        <td className="text-muted">물리</td>
                                        <td className="text-muted">몰라</td>
                                    </tr>
                                    <tr>
                                        <td>인문</td>
                                        <td className="text-muted">문어</td>
                                        <td className="text-muted">물리</td>
                                        <td className="text-muted">몰라</td>
                                    </tr>
                                    <tr>
                                        <td className="text-muted">인문</td>
                                        <td className="text-muted">문어</td>
                                        <td className="text-muted">물리</td>
                                        <td>몰라</td>
                                    </tr>
                                    <tr>
                                        <td className="text-muted">인문</td>
                                        <td className="text-muted">문어</td>
                                        <td className="text-muted">물리</td>
                                        <td className="text-muted">몰라</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Modal.Body>
                </div>
            </Modal.Dialog>
        </Modal>
    );
};
