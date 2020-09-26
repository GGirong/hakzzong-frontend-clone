import React from 'react';
import { Modal } from 'react-bootstrap';
import _ from 'lodash';

export const ModalFooter = Modal.Footer;

export const BaseModal = props => {
    const {
        children: [header, body, footer],
        visible,
        close,
        size = 'md',
        dialogClassName = '',
    } = props;

    return (
        <Modal
            show={visible}
            onHide={close}
            size={size}
            dialogClassName={dialogClassName}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>{header}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            {footer ? <Modal.Footer>{footer}</Modal.Footer> : ''}
        </Modal>
    );
};
