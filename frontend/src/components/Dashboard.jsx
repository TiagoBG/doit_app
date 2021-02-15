import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getFromLocal } from '../functions/localStorage';
import api from '../api/axios';

export default function Dashboard() {
    const [taskData, setTaskData] = useState({});
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
        const date= item.split("T")
        return date[0]
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

    console.log(taskData);

    return (
        <section className='mx-auto mt-5 container-fluid col-11'>
            <Card style={{ backgroundColor: '#d1d8e0' }}>
                <Card.Header style={{ backgroundColor: '#a5b1c2' }}>
                    <h3>Welcome back {user}! Let's catch up:</h3>
                </Card.Header>
                <div className="d-flex flex-wrap justify-content-center">
                {taskData.map((task) => (    
                    <Card className='col-3 mx-3 my-5' key={task._id}>
                        <Card.Header className='col'>
                            <div className="d-flex">
                                {task.taskname}<br/>
                                {prioritize(task.priority)}
                            </div>                            
                        </Card.Header>
                        <Card.Body>
                            {task.urlimage}
                        </Card.Body>
                        <Card.Footer>
                            {dateTime(task.expdate)}
                        </Card.Footer>
                    </Card> 
                ))};
                </div>
            </Card>
        </section>
    )
}