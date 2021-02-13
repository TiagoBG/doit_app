import React from 'react';
import logo from '../../images/doit_logo.png';

export default function Header (){

    return(
        <nav className='container-fluid mb-5 text-light py-4' style={{backgroundColor: '#1B1464'}}>
            <div className="d-flex text-center">
                <img src={logo} height='75px' alt="DoIt Logo" className='ml-3 my-auto'/>
                <h1 className='ml-2 my-auto'>DoIt App</h1>
                <div className="d-flex justify-content-end">
                    <h4 className='ml-5 mt-4 '>Control your activities</h4>
                </div>
            </div>
        </nav>
    )
}