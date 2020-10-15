import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

import { useAPI, APIRoute } from 'Client';

export const SearchConceptsModal = ({ form, names, isOpen = false, close }) => {
    const [concepts, setConcepts] = useState([]);
    const conceptListAPI = useAPI(APIRoute.Common.Concept.List, {
        callbacks: {
            onSuccess: setConcepts,
            onError: console.error,
        },
    });

    const watchName = form.watch(names.name);
    useEffect(() => {
        if (!isOpen) {
            return;
        }

        conceptListAPI.send({ name: watchName });
    }, [isOpen, watchName]);

    const setConcept = ({ id, name, nameInEnglish, description }) => {
        form.setValue(names.id, id);
        form.setValue(names.name, name);
        form.setValue(names.nameInEnglish, nameInEnglish);
        form.setValue(names.description, description);
    };

    return (
        <Modal
            id="search-concepts-modal"
            className="modal-narrow"
            show={isOpen}
            onHide={close}
        >
            <Modal.Header className="d-block">
                <div className="row w-100">
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={close}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="row w-100 justify-content-center align-items-center">
                    <h4>검색 결과</h4>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="search-result-box">
                            {concepts.length === 0 ? (
                                <div className="item">
                                    검색 결과가 없습니다.
                                </div>
                            ) : (
                                concepts.map(concept => (
                                    <a
                                        href="#"
                                        className="item"
                                        key={concept.id}
                                        onClick={() => setConcept(concept)}
                                    >
                                        {concept.name}
                                    </a>
                                ))
                            )}
                        </div>
                        <div className="row w-100">
                            <div className="col-12 pt-2 pb-2">
                                <label>원리</label>
                            </div>
                            <div className="col-12">
                                <input
                                    value={watchName}
                                    onChange={e =>
                                        form.setValue(
                                            names.name,
                                            e.target.value,
                                        )
                                    }
                                    className="input w-100 pt-3 pb-3 rounded-0"
                                />
                            </div>
                        </div>
                        <div className="row w-100 mt-5">
                            <div className="col-6">
                                <button
                                    onClick={close}
                                    className="btn btn-secondary w-100 rounded-0"
                                >
                                    취소
                                </button>
                            </div>
                            <div className="col-6">
                                <button
                                    onClick={close}
                                    className="btn btn-primary w-100 rounded-0"
                                >
                                    확인
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};
