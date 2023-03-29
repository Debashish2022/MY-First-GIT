import React, { useState } from 'react';
import './Frame6Modal.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';

export default function Frame6Modal() {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setShowModal(true)}>
                Frame 6 Modal
            </Button>

            <Modal centered show={showModal} onHide={() => setShowModal(false)} className='modalDiv'>
                <Modal.Body className='modalBodyFrame6'>
                    <div className="areYouSureTxt">Are you sure to</div>
                    <div className="areYouSureTxt">delete this course</div>
                    <Row>
                        <Col xs={6} md={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Row className='confirmBtnDiv'>
                                <div className='confirmTxt'>Confirm</div>
                            </Row>
                        </Col>
                        <Col xs={5} md={5} style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '0.5rem' }}>
                            <Row className='cancelBtnDiv' onClick={() => setShowModal(false)}>
                                <div className='confirmTxt'>Cancel</div>
                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

