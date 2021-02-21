import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getFromLocal, saveToLocal } from '../functions/localStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import api from '../api/axios';
import swal from "sweetalert2";


export default function Dashboard() {
    const [taskData, setTaskData] = useState([]);
    const [show, setShow] = useState(false);
    const [taskId, setTaskId] = useState('');
    const [modTask, setModTask] = useState('');
    const [expTask, setExpTask] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = (e) => setShow(true);
        
    const user = getFromLocal("name");
    const id = getFromLocal("id");
    let todo;

    useEffect(() => {
        showTasks();
    },[]);

    const prioritize = (item)=>{
        if(item===1){
            return "High"
        }else if (item===2){
            return "Mid"
        }else{
            return "Low"
        }
    }

    const dateTime = (item)=>{
        if(item){            
            const date= item.split("T");
            return date[0]
        }        
    }

    const expdateAlert=(item)=>{
        const todayTime = new Date(Date.now());
        const currentDate= todayTime.toISOString();
        const today= currentDate.split("T");
        const date= item.split("T");

        console.log(today[0]);
        console.log(item, currentDate)
        const difference = new Date(date[0]) - new Date(today[0]);
        console.log(difference);
        
        var unitmapping = {"days":24*60*60*1000,
                   "hours":60*60*1000,
                   "minutes":60*1000,
                   "seconds":1000};

            function floor(value)
            {
                return Math.floor(value)
            }

            function getHumanizedDiff(diff)
            {
                const result = floor(diff/unitmapping.days)
                if (result ===0) {
                    swal.fire({
                        title: "Alert!",
                        text: "You have tasks that expire today!",
                        icon: "warning",
                        confirmButtonText: "Got It!",
                        confirmButtonColor: "#f96332"
                    });
                  }
                return result;
            }
            const expTime=getHumanizedDiff(difference);

            return expTime;
    }


    

    const showTasks = ()=>{
        if (id) {
            api.get(`/dashboard/${id}`).then(
                (res)=> {
                    todo = res.data;
                    console.log(todo);
                    setTaskData(todo);
                }
            )
        }   
    }


    function insertTask(e) {
        let name = e.target.id;
        let value = e.target.value;
        setModTask((state) => ({
        ...modTask,
        [name]: value,
        }));
    }

    const modifyTask = (e)=>{
        console.log(e.target)
        // saveToLocal('taskid', e.target.id)
        const data = {
            taskname: modTask.taskname,
            urlimage: modTask.urlimage,
            priority: parseInt(modTask.priority),
            expdate: modTask.expdate,
            user: getFromLocal('id'),            
        }
        console.log(data);
        api.post(`/dashboard/${taskId}`, data).then((res)=>{
            if (res.data.state ===0) {
                swal.fire({
                    title: "Oops! 500 Error",
                    text: "Please try again or come back later",
                    icon: "error",
                    confirmButtonText: "Got It!",
                    confirmButtonColor: "#f96332"
                });
                console.log(res.data);
              }else{
                swal.fire({
                    title: "Are you sure to update this task?",
                    icon: "question",
                    confirmButtonText: "Update",
                    confirmButtonColor: "#54e346",
                    focusConfirm: false,
                    focusCancel: true
                  }).then((result) => {
                    // Reload the Page
                    window.location.reload();;
                });                                          
              }
        });
        
    }
    
    const clearFields = () => {
        const taskName = document.querySelector('#taskname');
        const taskImage = document.querySelector('#urlimage');
        const taskPrority = document.querySelector('#priority');
        const taskExpdate = document.querySelector('#expdate');
    
        const userInputs = [taskName, taskImage, taskPrority, taskExpdate]
    
        for (const input of userInputs) {
          input.value = ''
        }
    
    }

    const deleteTask=(item)=>{
        api.delete(`/dashboard/${item}`).then((res)=>{
            if (res.data.state ===0) {
                swal.fire({
                    title: "Oops! 500 Error",
                    text: "Please try again or come back later",
                    icon: "error",
                    confirmButtonText: "Got It!",
                    confirmButtonColor: "#f96332"
                });
                console.log(res.data);
              }else{
                swal.fire({
                    title: "Are you sure to remove this task?",
                    icon: "question",
                    confirmButtonText: "Delete",
                    confirmButtonColor: "#54e346",
                    cancelButtonColor: "#999999",
                    focusConfirm: false,
                    focusCancel: true
                    }).then((result) => {
                        // Reload the Page
                        window.location.reload();;
              });              
        }});        
    }
    // window. location. reload()
    return (
        <section className='mx-auto mt-5 container-fluid col-11'>
            <Card style={{ backgroundColor: '#d1d8e0' }}>
                <Card.Header style={{ backgroundColor: '#a5b1c2' }}>
                    <h3>Welcome back {user}! Let's catch up:</h3>
                </Card.Header>
                <div className="d-flex flex-wrap justify-content-center">
                {taskData.map((task) => (    
                    <Card className='col-3 mx-3 my-5' key={task._id}>
                        <Card.Header className='w-100'>
                            <div className="mt-3">
                               <h4>{task.taskname}</h4>
                                <h5 className='mt-1'>{dateTime(task.expdate)}</h5>
                            </div>                            
                        </Card.Header>
                        <Card.Body>
                            <div className="">                            
                            <h5>Priority: {prioritize(task.priority)}</h5>
                            {task.urlimage}
                            </div>
                            <div>
                            <h6 className='text-danger mt-4'>The task will expire in: {expdateAlert(task.expdate)} days.</h6>
                            </div>
                        </Card.Body>
                        <div className='mx-auto my-4'>
                            <Button className='btn btn-primary mx-4' onClick={(e)=>{handleShow(); setTaskId(task._id); saveToLocal("task", task._id)}}><FontAwesomeIcon icon={faEdit}/></Button>
                            <Button className='btn btn-danger mx-4' onClick={(e)=>{deleteTask(task._id); saveToLocal("task", task._id)}}><FontAwesomeIcon icon={faTrash} /></Button>
                        </div>
                    </Card> 
                ))};
                </div>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{ backgroundColor: '#a5b1c2' }} closeButton>
                    <Modal.Title><h3>Edit Task</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#d1d8e0' }}>
                    <Card style={{ backgroundColor: '#d1d8e0' }}>
                        <Card.Body>
                            <Form className='d-flex'>
                                <Form.Group className='mx-3'>
                                    <Form.Label className="mr-sm-2" htmlFor="taskname" srOnly>
                                        Set the task name
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
                                        <option value="0">Set the priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Mid</option>
                                        <option value={3}>Low</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className='mx-3'>
                                    <Form.Label className="mr-sm-2" htmlFor="expdate">
                                        Set the expiration date
                                </Form.Label>
                                    <Form.Control type="date" name="expdate" id="expdate" onChange={insertTask}/>
                                    <Form.File id="urlimage" name='urlimage' label="Choose a task image" className='mt-3' onChange={insertTask}/>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        <Button className='ml-3 mb-3 col-3 mx-auto' onClick={modifyTask} style={{backgroundColor: '#009432', border: '2px solid #009432'}}><b>Done</b></Button>
                    </Card>
                </Modal.Body>
            </Modal>
        </section>
    )
}