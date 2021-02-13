import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SignUp() {

    return (
        <section className='mx-auto col-4'>
            <Card style={{ backgroundColor: '#d1d8e0' }}>
                <Card.Header className='py-3 mb-5 text-center' style={{ backgroundColor: '#a5b1c2' }}>
                    <h5><b>Sign Up</b></h5>
                </Card.Header>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter your name" className='col-8 mx-auto' />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Enter your surname" className='col-8 mx-auto' />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter your email" className='col-8 mx-auto' />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Enter your Password" className='col-8 mx-auto' />
                </Form.Group>
                <Form.Text className="text-dark mb-4 mx-auto">
                    We'll never share your information with anyone else
                    </Form.Text>
                <Button className='btn col-5 mx-auto mt-4 mb-2' href='/' style={{ backgroundColor: '#44bd32' }}><b>Sign up</b></Button>
                <Button className='btn col-5 mx-auto mb-4 mt-2' href='/' style={{ backgroundColor: '#EE5A24' }}><b>Return</b></Button>
            </Card>
        </section>
    )
};