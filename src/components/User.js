import React,{Component, useEffect, useState} from 'react'
import { Table } from 'react-bootstrap';
import api from './api';

export default function User (){

//const api =axios.create({baseURL:'http://localhost:4192/api'});

const[user,getUser]=useState([])
//state ={ users:[]}
useEffect(()=>{
    getUsers();

  },[]);
const getUsers =()=>{
    api({
        method: 'get',
        url:'/User/GetAll',
        data: {
      
            name: "",
            lastname: "",
            mail: "",
            phoneNumber: "",
            plateNumber: "",
           
          } 
        }).then((response) => {
    
           const users =response.data; 
           getUser(users)

        console.log(users);
        console.log("Succes");
        
       
      }, (error) => {
        console.log(error);
      });
}


        return(
            <div >
                <Table className='mt-4' striped bordered hover size='sm'>

                
                        
                    <thead><tr>
                        <th>Tc</th>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Mail</th>
                        <th>phone</th>
                        <th>plate</th>
                    </tr>
                    <tr>
                        <th key={user.Tc}>{user.Tc}</th>
                        <th>{user.Name}</th>
                        <th>{user.Lastname}</th>
                        <th>{user.Mail}</th>
                        <th>{user.phonenumber}</th>
                        <th>{user.platenumber}</th>
                    </tr>
                       
                    </thead>
                    <tbody>
                      
                    </tbody>
                </Table>
               
            </div>
        );
    
}