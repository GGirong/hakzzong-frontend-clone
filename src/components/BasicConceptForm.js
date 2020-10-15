import React from 'react';
import { SearchConceptsModal, useModal } from 'Components/modals';

export const BasicConceptForm = ({
    form,
    names = {
        id: 'id',
        name: 'name',
        nameInEnglish: 'nameInEnglish',
        description: 'description',
    },
    disabled = false,
}) => {
    const searchConceptsModal = useModal();
    const reset = () => {
        form.setValue(names.id, null);
        form.setValue(names.name, '');
        form.setValue(names.nameInEnglish, '');
        form.setValue(names.description, '');
    };
    disabled = disabled || !form.watch(names.id);

    return (
        <>
            <div className="form-row">
                <div className="col-6">
                    <div className="w-10 d-inline-block justify-content-center align-items-center">
                        <h5 className="text-middle text-center mb-0">원리</h5>
                    </div>
                    <input type="hidden" name={names.id} ref={form.register} />
                    <input
                        type="text"
                        disabled={disabled}
                        name={names.name}
                        ref={form.register}
                        className="d-inline-block w-50 form-control rounded-0 border-dark"
                    />
                    <button
                        id="search-concepts-btn"
                        type="button"
                        className="w-20 btn btn-secondary"
                        onClick={searchConceptsModal.open}
                    >
                        검색
                    </button>
                    <button
                        id="search-concepts-btn"
                        type="button"
                        className="w-20 btn btn-warning"
                        onClick={reset}
                    >
                        초기화
                    </button>
                </div>
                <div className="col-6">
                    <div className="w-20 d-inline-block justify-content-center align-items-center">
                        <h5 className="text-middle text-center mb-0">
                            영문명(원어)
                        </h5>
                    </div>
                    <input
                        type="text"
                        name={names.nameInEnglish}
                        disabled={disabled}
                        className="d-inline-block w-60 form-control rounded-0 border-dark"
                        ref={form.register}
                    />
                </div>
                <SearchConceptsModal
                    form={form}
                    names={names}
                    {...searchConceptsModal}
                />
            </div>
            <div className="form-line mt-4">
                <div className="form-group w-100">
                    <label>
                        <h5 className="mr-2 d-inline-block">설명</h5>
                        <span>(공백 포함 250-300 글자)</span>
                    </label>
                    <div className="position-relative">
                        <textarea
                            name={names.description}
                            disabled={disabled}
                            ref={form.register}
                            className="concept-description d-block w-100 p-3 rounded-0"
                        ></textarea>
                        <div className="position-absolute fixed-bottom w-100 d-flex justify-content-end p-3 text-muted">
                            {
                                <span>
                                    {form.watch(names.description).length}
                                    /300
                                </span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
