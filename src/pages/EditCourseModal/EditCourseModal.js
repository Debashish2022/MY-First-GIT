import React, { useState } from 'react';
import './EditCourseModal.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoCloseSharp } from "react-icons/io5";
import { Form, Row } from 'react-bootstrap';

export default function EditCourseModal() {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setShowModal(true)}>
                Edit Course Modal
            </Button>

            <Modal centered show={showModal} onHide={() => setShowModal(false)} className='modalDiv'>
                <div className='modalHeaderEditCourse'>
                    <div className='headerTitle'>Edit Course</div>
                    <div onClick={() => setShowModal(false)}>
                        <IoCloseSharp className='closeBtn' />
                    </div>
                </div>
                <Modal.Body className='modalBodyEditCourse'>
                    <Form>
                        <Form.Control type="text" className="mb-3" id='authorNameDiv' placeholder='Python Developement From Scratch' />
                        <Form.Control type="text" className="mb-3" id='authorNameDiv' placeholder='Bhavani Khuntia' />
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" rows={4} className='courseNameDiv' placeholder='Course Details Edit...' />
                        </Form.Group>
                    </Form>

                    <Row className='saveBtnDiv'>
                        <div className='saveTxt'>Save</div>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

