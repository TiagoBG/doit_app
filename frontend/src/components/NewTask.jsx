import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function NewTask() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section className='ml-5 mt-4 mr-3'>
            <div className='mx-auto'>
                <Button className='btn btn-primary mr-5' style={{backgroundColor: '#009432', border: '2px solid #009432'}} onClick={handleShow}><b>New Task</b></Button>
                <Button className='btn btn-danger mx-auto' href='/' style={{backgroundColor: '#EA2027', border: '2px solid #EA2027'}}><b>Log out</b></Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{ backgroundColor: '#a5b1c2' }} closeButton>
                    <Modal.Title><h3>New Task</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#d1d8e0' }}>
                    <Card style={{ backgroundColor: '#d1d8e0' }}>
                        <Card.Body>
                            <Form className='d-flex'>
                                <Form.Group className='mx-3'>
                                    <Form.Label className="mr-sm-2" htmlFor="taskName" srOnly>
                                        Enter the task name
                                </Form.Label>
                                    <Form.Control type="text" placeholder="Task name" name="taskName" id="taskName" className='mt-4' />
                                    <Form.Control
                                        as="select"
                                        className="mt-5"
                                        id="priority"
                                        custom
                                    >
                                        <option value="0">Enter the priority</option>
                                        <option value="1">High</option>
                                        <option value="2">Mid</option>
                                        <option value="3">Low</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className='mx-3'>
                                    <Form.Label className="mr-sm-2" htmlFor="expDate">
                                        Enter the expiration date
                                </Form.Label>
                                    <Form.Control type="date" name="expDate" id="expDate" />
                                    <Form.File id="exampleFormControlFile1" label="Choose a task image" className='mt-3' />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        <Button className='ml-3 mb-3 col-3 mx-auto' style={{backgroundColor: '#009432', border: '2px solid #009432'}}><b>Create</b></Button>
                    </Card>
                </Modal.Body>
            </Modal>

        </section>
    )
}