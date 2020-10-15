import React, { useState, useEffect, useRef, useContext } from 'react';
import { Form } from 'react-bootstrap';
import { useForm, useFieldArray } from 'react-hook-form';

import { useAPI, APIRoute } from 'Client';
import { AppContext } from 'Contexts';
import { BasicConceptForm, TagWizard } from 'Components';

export const StudySubjectCreatePatchView = ({ entity }) => {
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
    const missionReportPatchAPI = useAPI(
        APIRoute.ResearchAssistant.MissionReport.Patch,
        {
            callbacks: {
                onSuccess: () => alert('성공'),
                onError: console.error,
            },
        },
    );

    const temporarilySaveButtonRef = useRef(null);
    const submitButtonRef = useRef(null);
    const [tags, setTags] = useState(entity ? entity.studySubject.tags : []);

    const form = useForm({
        // only for fields to watch
        defaultValues: {
            task: '',
            conceptDescription: '',
        },
    });
    const searchKeywords = useFieldArray({
        control: form.control,
        name: 'searchKeywords',
    });
    const exampleKeywords = useFieldArray({
        control: form.control,
        name: 'exampleKeywords',
    });
    const relevantKeywords = useFieldArray({
        control: form.control,
        name: 'relevantKeywords',
    });
    const recommendedBooks = useFieldArray({
        control: form.control,
        name: 'recommendedBooks',
    });

    form.handleSubmit = form.handleSubmit((data, event) => {
        const {
            task,
            searchKeywords,
            exampleKeywords,
            relevantKeywords,
            recommendedBooks,
            conceptId,
            conceptName,
            conceptNameInEnglish,
            conceptDescription,
        } = data;
        const {
            nativeEvent: { submitter },
        } = event;

        if (
            ![
                temporarilySaveButtonRef.current,
                submitButtonRef.current,
            ].includes(submitter)
        ) {
            return;
        }

        const concept = conceptId
            ? null
            : {
                  id: conceptId,
                  name: conceptName,
                  nameInEnglish: conceptNameInEnglish,
                  description: conceptDescription,
              };

        const studySubject = {
            id: entity ? entity.studySubject.id : null,
            task,
            concept: conceptId || null,
            tags,
            keywords: [
                ...searchKeywords.map(({ value }) => ({
                    type: 'search',
                    keyword: value,
                })),
                ...exampleKeywords.map(({ value }) => ({
                    type: 'example',
                    keyword: value,
                })),
                ...relevantKeywords.map(({ value }) => ({
                    type: 'relevant',
                    keyword: value,
                })),
            ],
            recommendedBooks: recommendedBooks.map(({ value }) => value),
        };

        const submitted =
            submitter === submitButtonRef.current
                ? new Date().toISOString()
                : null;

        if (entity) {
            missionReportPatchAPI.send(
                {
                    concept,
                    studySubject,
                    mission: currentMissionId,
                    submitted,
                },
                {
                    additionalPath: entity.id,
                },
            );
        } else {
            missionReportCreateAPI.send({
                concept,
                studySubject,
                mission: currentMissionId,
                submitted,
            });
        }
    });

    useEffect(() => {
        form.setValue('recommendedMajors', tags);
    }, [tags]);

    // deserialize
    useEffect(() => {
        if (!entity) {
            return;
        }
        const {
            studySubject: {
                task,
                concept,
                keywords,
                recommendedBooks: _recommendedBooks,
            },
        } = entity;

        const searchKeywords = keywords
            .filter(({ type }) => type === 'search')
            .map(({ keyword }) => ({ value: keyword }));
        const exampleKeywords = keywords
            .filter(({ type }) => type === 'example')
            .map(({ keyword }) => ({ value: keyword }));
        const relevantKeywords = keywords
            .filter(({ type }) => type === 'relevant')
            .map(({ keyword }) => ({ value: keyword }));
        const recommendedBooks = _recommendedBooks.map(isbn => ({
            value: isbn,
        }));

        form.reset({
            task,

            conceptId: concept.id,
            conceptName: concept.name,
            conceptNameInEnglish: concept.nameInEnglish,
            conceptDescription: concept.description,

            searchKeywords:
                searchKeywords.length > 0
                    ? searchKeywords
                    : [
                          { value: '' },
                          { value: '' },
                          { value: '' },
                          { value: '' },
                      ],
            exampleKeywords:
                exampleKeywords.length > 0
                    ? exampleKeywords
                    : [
                          { value: '' },
                          { value: '' },
                          { value: '' },
                          { value: '' },
                      ],
            relevantKeywords:
                relevantKeywords.length > 0
                    ? relevantKeywords
                    : [
                          { value: '' },
                          { value: '' },
                          { value: '' },
                          { value: '' },
                      ],
            recommendedBooks:
                recommendedBooks.length > 0
                    ? recommendedBooks
                    : [{ value: '' }, { value: '' }],
        });
        console.log(form);
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="w-100">
                    <Form onSubmit={form.handleSubmit} className="w-100">
                        <BasicConceptForm
                            form={form}
                            names={{
                                id: 'conceptId',
                                name: 'conceptName',
                                nameInEnglish: 'conceptNameInEnglish',
                                description: 'conceptDescription',
                            }}
                            disabled={!!entity}
                        />
                        <div className="form-line mt-4">
                            <div className="form-group w-100">
                                <label>
                                    <h5 className="mr-2 d-inline-block">
                                        과제
                                    </h5>
                                    <span>(공백 포함 250-300 글자)</span>
                                </label>
                                <div className="position-relative">
                                    <textarea
                                        name="task"
                                        ref={form.register}
                                        placeholder="''이란?"
                                        className="concept-description d-block w-100 p-3 rounded-0"
                                    ></textarea>
                                    <div className="position-absolute fixed-bottom w-100 d-flex justify-content-end p-3 text-muted">
                                        {
                                            <span>
                                                {form.watch('task').length}
                                                /300
                                            </span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-line mt-4">
                            <div className="form-group w-100 d-flex justify-content-end">
                                <button className="btn btn-primary btn-lg">
                                    유사도 검사 진행
                                </button>
                            </div>
                        </div>
                        <div className="form-row mt-5">
                            <div className="col-2">
                                <div className="h-100 d-flex justify-content-center align-items-center">
                                    <h5 className="text-middle text-center mb-0">
                                        검색키워드
                                    </h5>
                                </div>
                            </div>
                            {searchKeywords.fields.map(
                                (searchKeyword, index) => (
                                    <div
                                        key={searchKeyword.id}
                                        className="col-2"
                                    >
                                        <input
                                            key={searchKeyword.id}
                                            ref={form.register()}
                                            name={`searchKeywords[${index}].value`}
                                            defaultValue={searchKeyword.value}
                                            className="form-control rounded-0 border-dark"
                                        />
                                    </div>
                                ),
                            )}
                        </div>
                        <div className="form-row mt-3">
                            <div className="col-2">
                                <div className="h-100 d-flex justify-content-center align-items-center">
                                    <h5 className="text-middle text-center mb-0">
                                        사례키워드
                                    </h5>
                                </div>
                            </div>
                            {exampleKeywords.fields.map(
                                (exampleKeywordField, index) => (
                                    <div
                                        key={exampleKeywordField.id}
                                        className="col-2"
                                    >
                                        <input
                                            key={exampleKeywordField.id}
                                            ref={form.register()}
                                            name={`exampleKeywords[${index}].value`}
                                            defaultValue={
                                                exampleKeywordField.value
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
                                        관련키워드
                                    </h5>
                                </div>
                            </div>
                            {relevantKeywords.fields.map(
                                (relevantKeywordField, index) => (
                                    <div
                                        key={relevantKeywordField.id}
                                        className="col-2"
                                    >
                                        <input
                                            key={relevantKeywordField.id}
                                            ref={form.register()}
                                            name={`relevantKeywords[${index}].value`}
                                            defaultValue={
                                                relevantKeywordField.value
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
                                        * 관련 도서
                                    </h5>
                                </div>
                            </div>
                            {recommendedBooks.fields.map(
                                (recommendedBookField, index) => (
                                    <div
                                        key={recommendedBookField.id}
                                        className="col-2"
                                    >
                                        <input
                                            key={recommendedBookField.id}
                                            ref={form.register()}
                                            name={`recommendedBooks[${index}].value`}
                                            defaultValue={
                                                recommendedBookField.value
                                            }
                                            className="form-control rounded-0 border-dark"
                                        />
                                    </div>
                                ),
                            )}
                        </div>
                        <div className="form-row mt-5 d-flex justify-content-end">
                            <h4 className="text-muted">
                                검색 키워드는 모두 필수, 전체 키워드 8개 이상
                                작성
                            </h4>
                        </div>
                        <hr className="border-dark mt-4 thick" />
                        <div className="mt-5">
                            <TagWizard
                                isLoaded={entity && tags.length > 0}
                                tags={tags}
                                setTags={setTags}
                                onComplete={tags =>
                                    form.setValue('recommendedMajors', tags)
                                }
                            />
                        </div>

                        <hr className="border-dark mt-5 thick" />
                        <div className="row mt-5 justify-content-end">
                            <div className="d-flex align-items-center mr-5">
                                <h3>총 포인트</h3>
                            </div>
                            <div className="border border-dark col-4 text-center p-2">
                                <h3>0</h3>
                            </div>
                        </div>
                        <div className="form-row mt-5 mb-5">
                            <div className="offset-2 col-3 justify-content-center align-items-center d-flex">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg rounded-0 btn-block"
                                    ref={temporarilySaveButtonRef}
                                >
                                    임시 저장
                                </button>
                            </div>
                            <div className="offset-1 col-3 justify-content-center align-items-center d-flex">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg rounded-0 btn-block"
                                    ref={submitButtonRef}
                                >
                                    제출하기
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};
