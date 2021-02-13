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
                <Form>
                    <Form.Control type="text" placeholder="Enter your name" className='col-8 mx-auto mb-4' />
                    <Form.Control type="text" placeholder="Enter your surname" className='col-8 mx-auto mb-4' />
                    <Form.Control type="email" placeholder="Enter your email" className='col-8 mx-auto mb-4' />
                    <Form.Control type="password" placeholder="Enter your Password" className='col-8 mx-auto mb-4' />
                    <Form.Text className="text-dark mb-4 text-center">
                    We'll never share your information with anyone else
                    </Form.Text>
                    </Form>
                <Button className='btn col-5 mx-auto mt-4 mb-2' href='/' style={{ backgroundColor: '#44bd32', border: '2px solid #44bd32' }}><b>Sign up</b></Button>
                <Button className='btn col-5 mx-auto mb-4 mt-2' href='/' style={{ backgroundColor: '#EE5A24', border: '2px solid #EE5A24' }}><b>Return</b></Button>
            </Card>
        </section>
    )
};