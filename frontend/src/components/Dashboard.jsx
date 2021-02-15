import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getFromLocal } from '../functions/localStorage';
import api from '../api/axios';

export default function Dashboard() {

    const user = getFromLocal("name");
    const id = getFromLocal("id");
    const [taskData, setTaskData] = useState({});
    let todo;

    useEffect(() => {
        showTasks();
    },[]);

    const showTasks = ()=>{
        if (id) {
            api.get(`/dashboard/${id}`, {
                "user": id
            }).then(
                (res)=> {
                    todo = res;
                    setTaskData(todo);
                }
            )
        }   
    }

    console.log(taskData);

    return (
        <section className='mx-auto mt-5 container-fluid col-11'>
            <Button onClick={showTasks}>VER</Button>
            <Card style={{ backgroundColor: '#d1d8e0' }}>
                <Card.Header style={{ backgroundColor: '#a5b1c2' }}>
                    <h3>Welcome back {user}! Let's catch up:</h3>
                </Card.Header>
                <div className="d-flex flex-wrap justify-content-center">
                    <Card className='col-3 mx-3 my-5'>
                        <Card.Header>

                        </Card.Header>
                        <Card.Body>
                            TASK 1
                        </Card.Body>
                        <Card.Footer>

                        </Card.Footer>
                    </Card>                    
                </div>
            </Card>
        </section>
    )
}