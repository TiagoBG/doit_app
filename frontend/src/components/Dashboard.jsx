import React from 'react';
import Card from 'react-bootstrap/esm/Card';

export default function Dashboard(){
    return(
        <section className='mx-auto mt-5 container-fluid col-11'>
            <Card style={{ backgroundColor: '#d1d8e0' }}>
                <Card.Header style={{ backgroundColor: '#a5b1c2' }}><h3>Activities Dashboard</h3></Card.Header>
                <div className="d-flex flex-wrap justify-content-center">
                    <Card className='col-3 mx-3 my-5'>
                        TASK 1
                    </Card>
                    <Card className='col-3 mx-4 my-5'>
                        TASK 2
                    </Card>
                    <Card className='col-3 mx-4 my-5'>
                        TASK 3
                    </Card>
                    <Card className='col-3 mx-4 my-5'>
                        TASK 4
                    </Card>
                </div>
            </Card>
        </section>
    )
}