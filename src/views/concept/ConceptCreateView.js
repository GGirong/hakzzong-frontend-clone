import React, { useState, useContext } from 'react';
import { Form } from 'react-bootstrap';
import { useForm, useFieldArray } from 'react-hook-form';

import { useAPI, APIRoute } from 'Client';
import { BasicConceptForm } from 'Components';
import { getFieldArrayValues } from 'Utils';
import { AppContext } from 'Contexts';

export const ConceptCreateView = ({ entity }) => {
    const {
        researchAssistant: { currentMissionId },
    } = useContext(AppContext);

    const missionReportCreateAPI = useAPI(
        APIRoute.ResearchAssistant.MissionReport.Create,
        {
            callbacks: {
                onSuccess: () => alert('성공'),
                onError: console.error,
            },
        },
    );

    const form = useForm({
        defaultValues: {
            id: '',
            name: '',
            nameInEnglish: '',
            description: '',
            relatedConcepts: [
                { value: '' },
                { value: '' },
                { value: '' },
                { value: '' },
            ],
            relatedConceptsInEnglish: [
                { value: '' },
                { value: '' },
                { value: '' },
                { value: '' },
            ],
            relatedMajors: [
                { value: '' },
                { value: '' },
                { value: '' },
                { value: '' },
            ],
            relatedSchoolSubjects: [
                { value: '' },
                { value: '' },
                { value: '' },
                { value: '' },
            ],
        },
    });
    const relatedConcepts = useFieldArray({
        control: form.control,
        name: 'relatedConcepts',
    });
    const relatedConceptsInEnglish = useFieldArray({
        control: form.control,
        name: 'relatedConceptsInEnglish',
    });
    const relatedMajors = useFieldArray({
        control: form.control,
        name: 'relatedMajors',
    });
    const relatedSchoolSubjects = useFieldArray({
        control: form.control,
        name: 'relatedSchoolSubjects',
    });

    form.handleSubmit = form.handleSubmit(data => {
        const {
            name,
            nameInEnglish,
            description,
            relatedConcepts,
            relatedConceptsInEnglish,
            relatedMajors,
            relatedSchoolSubjects,
        } = data;
        missionReportCreateAPI.send({
            mission: currentMissionId,
            concept: {
                name,
                nameInEnglish,
                description,
                relatedConcepts: getFieldArrayValues(relatedConcepts),
                relatedConceptsInEnglish: getFieldArrayValues(
                    relatedConceptsInEnglish,
                ),
                relatedMajors: getFieldArrayValues(relatedMajors),
                relatedSchoolSubjects: getFieldArrayValues(
                    relatedSchoolSubjects,
                ),
            },
            // for pre-data-collection
            submitted: new Date().toISOString(),
        });
    });

    return (
        <>
            <div className="container-fluid">
                <div className="row w-100">
                    <Form onSubmit={form.handleSubmit} className="w-100">
                        <BasicConceptForm form={form} />
                        <div className="form-row mt-4">
                            <div className="col-2">
                                <div className="h-100 d-flex justify-content-center align-items-center">
                                    <h5 className="text-middle text-center mb-0">
                                        유사개념
                                    </h5>
                                </div>
                            </div>
                            {relatedConcepts.fields.map(
                                (relatedConcept, index) => (
                                    <div
                                        key={relatedConcept.id}
                                        className="col-2"
                                    >
                                        <input
                                            key={relatedConcept.id}
                                            ref={form.register}
                                            name={`relatedConcepts[${index}].value`}
                                            defaultValue={relatedConcept.value}
                                            className="form-control rounded-0 border-dark"
                                        />
                                    </div>
                                ),
                            )}
                        </div>
                        <div className="form-row mt-4">
                            <div className="col-2">
                                <div className="h-100 d-flex justify-content-center align-items-center">
                                    <h5 className="text-middle text-center mb-0">
                                        원어명
                                    </h5>
                                </div>
                            </div>
                            {relatedConceptsInEnglish.fields.map(
                                (relatedConceptInEnglish, index) => (
                                    <div
                                        key={relatedConceptInEnglish.id}
                                        className="col-2"
                                    >
                                        <input
                                            key={relatedConceptInEnglish.id}
                                            ref={form.register}
                                            name={`relatedConceptsInEnglish[${index}].value`}
                                            defaultValue={
                                                relatedConceptInEnglish.value
                                            }
                                            className="form-control rounded-0 border-dark"
                                        />
                                    </div>
                                ),
                            )}
                        </div>
                        <div className="form-row mt-4">
                            <div className="col-2">
                                <div className="h-100 d-flex justify-content-center align-items-center">
                                    <h5 className="text-middle text-center mb-0">
                                        긴밀학과
                                    </h5>
                                </div>
                            </div>
                            {relatedMajors.fields.map((relatedMajor, index) => (
                                <div key={relatedMajor.id} className="col-2">
                                    <input
                                        key={relatedMajor.id}
                                        ref={form.register}
                                        name={`relatedMajors[${index}].value`}
                                        defaultValue={relatedMajor.value}
                                        className="form-control rounded-0 border-dark"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="form-row mt-3">
                            <div className="col-2">
                                <div className="h-100 d-flex justify-content-center align-items-center">
                                    <h5 className="text-middle text-center mb-0">
                                        긴밀과목
                                    </h5>
                                </div>
                            </div>
                            {relatedSchoolSubjects.fields.map(
                                (relatedSchoolSubject, index) => (
                                    <div
                                        key={relatedSchoolSubject.id}
                                        className="col-2"
                                    >
                                        <input
                                            key={relatedSchoolSubject.id}
                                            ref={form.register}
                                            name={`relatedSchoolSubjects[${index}].value`}
                                            defaultValue={
                                                relatedSchoolSubject.value
                                            }
                                            className="form-control rounded-0 border-dark"
                                        />
                                    </div>
                                ),
                            )}
                        </div>
                        <div className="form-row mt-5">
                            <div className="offset-3 col-5 justify-content-center align-items-center d-flex">
                                <button
                                    type="submit"
                                    className="btn btn-primary rounded-0 btn-block"
                                >
                                    제출하기
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
};
