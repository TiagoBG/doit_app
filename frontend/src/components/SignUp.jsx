import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from '../api/axios';
import swal from "sweetalert2";


export default function SignUp() {

    const [userData, setUserData] = useState({});
    // useEffect(() => {},[]);
    function insertUser(e) {
        let name = e.target.id;
        let value = e.target.value;
        setUserData((state) => ({
        ...userData,
        [name]: value,
        }));
    }

    const registerUser = ()=>{
        const data = {
            name: userData.name,
            surname: userData.surname,
            email: userData.email,
            password: userData.password
        }
        console.log(data);
        api.post('/signup', data).then((res)=>{
            if (res.data.state ===0) {
                swal.fire({
                  title: "Oops! Error: 500",
                  text: "Intente nuevamente o vuelva después",
                  icon: "error",
                  confirmButtonText: "¡Entendido!",
                  confirmButtonColor: "#f96332"
                });
                console.log(res.data);
              }else{
                swal.fire({
                    title: "Usuario creado correctamente",
                    icon: "success",
                    confirmButtonText: "¡Entendido!",
                    confirmButtonColor: "#54e346"
                  });

                  api.post('/send',data).then((res)=>{
                    if(res.state === 0){
                      alert('Cannot send the confirmation to the given email');
                    }
                    clearFields();
                  });                       
              }
        })
    }

    const clearFields = () => {
        const userName = document.querySelector('#name');
        const userSurname = document.querySelector('#surname');
        const userEmail = document.querySelector('#email');
        const userPassword = document.querySelector('#password');
    
        const userInputs = [userName, userSurname, userEmail, userPassword]
    
        for (const input of userInputs) {
          input.value = ''
        }
    
      }

    return (
        <section className='mx-auto col-4'>
            <Card style={{ backgroundColor: '#d1d8e0' }}>
                <Card.Header className='py-3 mb-5 text-center' style={{ backgroundColor: '#a5b1c2' }}>
                    <h5><b>Sign Up</b></h5>
                </Card.Header>
                <Form>
                    <Form.Control type="text" placeholder="Enter your name" id='name' className='col-8 mx-auto mb-4' onChange={insertUser}/>
                    <Form.Control type="text" placeholder="Enter your surname" id='surname' className='col-8 mx-auto mb-4' onChange={insertUser}/>
                    <Form.Control type="email" placeholder="Enter your email" id='email' className='col-8 mx-auto mb-4' onChange={insertUser}/>
                    <Form.Control type="password" placeholder="Enter your password" id='password' className='col-8 mx-auto mb-4' onChange={insertUser}/>
                    <Form.Text className="text-dark mb-4 text-center">
                    We'll never share your information with anyone else
                    </Form.Text>
                    </Form>
                <Button className='btn col-5 mx-auto mt-4 mb-2' onClick={registerUser} style={{ backgroundColor: '#44bd32', border: '2px solid #44bd32' }}><b>Sign up</b></Button>
                <Button className='btn col-5 mx-auto mb-4 mt-2' href='/' style={{ backgroundColor: '#EE5A24', border: '2px solid #EE5A24' }}><b>Sign In</b></Button>
            </Card>
        </section>
    )
};