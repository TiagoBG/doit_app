import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function LogIn() {

    return (
        <section className='mx-auto col-4'>
            <Card style={{ backgroundColor: '#d1d8e0' }}>
                <Card.Header className='py-3 mb-5 text-center' style={{ backgroundColor: '#a5b1c2' }}>
                    <h5><b>Log In</b></h5>
                </Card.Header>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" className='col-8 mx-auto' />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" className='col-8 mx-auto' />
                </Form.Group>
                    <Button className='btn col-5 mx-auto mt-4 mb-2' href='/dashboard' style={{ backgroundColor: '#44bd32' }}><b>Log In</b></Button>
                    <Button className='btn col-5 mx-auto mb-5 mt-2' href='/signup' style={{ backgroundColor: '#44bd32' }}><b>Sign Up</b></Button>
            </Card>
        </section>
    )
};