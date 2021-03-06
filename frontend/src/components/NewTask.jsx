import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import api from '../api/axios';
import swal from "sweetalert2";
import { getFromLocal } from '../functions/localStorage';

export default function NewTask() {
    const [show, setShow] = useState(false);
    const [taskData, setTaskData] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const id = getFromLocal("id");
    
    function insertTask(e) {
        let name = e.target.id;
        let value = e.target.value;
        setTaskData((state) => ({
        ...taskData,
        [name]: value,
        }));
    }

    const createTask = ()=>{
        const data = {
            taskname: taskData.taskname,
            urlimage: taskData.urlimage,
            priority: parseInt(taskData.priority),
            expdate: taskData.expdate,
            user: getFromLocal('id')
        }
        const dataHeaders = getFromLocal('token');

        console.log(data);
        swal.fire({
            title: 'Are you sure?',
            text: "This task will be created",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0052D9',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Create'
          }).then((result) => {
            if (result.isConfirmed) {
              swal.fire({
                title: 'Task successfully created!',
                icon: 'success'
              }).then((result) => {
                api.post('/dashboard', data).then((res)=>{
                    if (res.data.state ===0) {
                        swal.fire({
                            title: "Oops! 500 Error",
                            text: "Please try again or come back later",
                            icon: "error",
                            confirmButtonText: "Got It!",
                            confirmButtonColor: "#f96332"
                        });
                        console.log(res.data);
                      }
                });
                // Reload the Page
                window.location.reload();;
              });
            }
        });                
    }

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
                                    <Form.Label className="mr-sm-2" htmlFor="taskname" srOnly>
                                        Enter the task name
                                </Form.Label>
                                    <Form.Control type="text" placeholder="Task name" name="taskname" id="taskname" onChange={insertTask} className='mt-4' />
                                    <Form.Control
                                        as="select"
                                        className="mt-5"
                                        name='priority'
                                        id="priority"
                                        onChange={insertTask}
                                        custom
                                    >
                                        <option value="0">Enter the priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Mid</option>
                                        <option value={3}>Low</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className='mx-3'>
                                    <Form.Label className="mr-sm-2" htmlFor="expdate">
                                        Enter the expiration date
                                </Form.Label>
                                    <Form.Control type="date" name="expdate" id="expdate" onChange={insertTask}/>
                                    <Form.File id="urlimage" name='urlimage' label="Choose a task image" className='mt-3' onChange={insertTask}/>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        <Button className='ml-3 mb-3 col-3 mx-auto' onClick={createTask} style={{backgroundColor: '#009432', border: '2px solid #009432'}}><b>Create</b></Button>
                    </Card>
                </Modal.Body>
            </Modal>
        </section>
    )
}