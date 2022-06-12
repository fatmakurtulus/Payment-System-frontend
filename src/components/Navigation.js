import React,{Component} from 'react'

import { Nav,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default function Navigation(){
   
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'/>
                <Nav>
                    <Link className='d-line p-2 bg-dark text-white' to="/">Home</Link>
                    <Link className='d-line p-2 bg-dark text-white' to="/Aparment">Aparment</Link>
                    <Link className='d-line p-2 bg-dark text-white' to="/User">User</Link>
                    <Link className='d-line p-2 bg-dark text-white' to="/Payment">Payment</Link>

                </Nav>
            </Navbar>
        );
    
}