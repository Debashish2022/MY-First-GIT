import React, { useState } from 'react';
import './Frame16Modal.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoCloseSharp } from "react-icons/io5";
import { FaUpload } from "react-icons/fa";
import { Form, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Frame16Modal() {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setShowModal(true)}>
                Frame 16 Modal
            </Button>

            <Modal centered show={showModal} onHide={() => setShowModal(false)} className='modalDiv'>
                <div className='modalHeaderUploadFiles'>
                    <div className='headerTitle'>Upload Files</div>
                    <div onClick={() => setShowModal(false)}>
                        <IoCloseSharp className='closeBtn' />
                    </div>
                </div>
                <Modal.Body className='modalBodyFrame16'>
                    <Form>
                        <div className='fileNameDiv'>
                            <input type="file" className='fileNameTxt' placeholder='Fileone_Python class .mp4' />
                            <div>
                                <FaUpload className='uploadBtn' />
                            </div>
                        </div>
                        <div><ProgressBar animated now={80} variant="success" /></div>
                        <div className='uploadingTxt'>Uploading...</div>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" rows={4} className='addDescriptionDiv' placeholder='Add Description' />
                        </Form.Group>
                    </Form>

                    <Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Row className='AddBtnDiv'>
                            <div className='AddTxt'>Add</div>
                        </Row>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

