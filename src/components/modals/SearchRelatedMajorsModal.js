import React, { useContext } from 'react';

import { Modal } from 'react-bootstrap';
import { transpose } from 'Utils';
import { AppContext } from 'Contexts';

export const SearchRelatedMajorsModal = ({
    addMajorCategory,
    isOpen = false,
    close,
}) => {
    const {
        researchAssistant: { majorCategories },
    } = useContext(AppContext);

    const handleCategoryClick = category => {
        addMajorCategory(category);
        close();
    };

    const reshapeMajorCategories = () => {
        const reshaped = [];
        Object.entries(majorCategories).map(([key, array]) => {
            reshaped.push([key, ...array]);
        });
        return transpose(reshaped) || [];
    };

    return (
        <Modal
            id="select-related-majors-modal"
            className="modal-select-relatives"
            onHide={close}
            show={isOpen}
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
                                {Object.keys(majorCategories).map(
                                    (majorCateogry, index) => (
                                        <td key={index} className="text-muted">
                                            {majorCateogry}
                                        </td>
                                    ),
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {reshapeMajorCategories().map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map(
                                        (col, colIndex) =>
                                            col && (
                                                <td
                                                    key={`${rowIndex}-${colIndex}`}
                                                    onClick={() =>
                                                        handleCategoryClick(
                                                            col.id,
                                                        )
                                                    }
                                                    className="text-muted"
                                                >
                                                    {col.subcategoryName}
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
