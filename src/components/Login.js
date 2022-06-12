import { useState } from "react";
import axios from 'axios';



export default function Login(){

    const [username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const navigate = useNavigate();


    const api =axios.create({baseURL:'http://localhost:4192/api/'});

    function validateForm(){
        console.log(password,username);
        return password.length>0 && username.length>0;
      }
      function handleSubmit (e){
        e.preventDefault();
        if (!username || !password) {
          setErrmsg("Invalid Entry");
          return;
        }
        try {
          api({
            method: 'post',
            url:'auth/login',
            data: { username, password
              } 
            }).then((response) => {
            console.log(response.data);
            console.log("Succes");
           
          }, (error) => {
            console.log(error);
          });
              setSucces(true);
              setUsername("");
              setPassword("");
              navigate("/Home");
          
        } catch (err) {
          if (!err?.response) {
      
            setErrmsg("No Server Response");
      
          } else {
      
            setErrmsg("Login Failed");
      
          }
        }
        
            
      }

      return (
  
        <div className='app'>
                  <div className='login-form'>
                    <div className='form'>
                      <h1>Login</h1>
                      <form onSubmit={handleSubmit}>
                        <div className='input-container'>
                          <label>Username</label>
                          <input type="text" name="username" required
                            value={username} placeholder="username"
                            onChange={(e) => setUsername(e.target.value)} />
                          {/*"erorr message"*/}
                        </div>
                        <div className='input-container'>
                          <label>password</label>
                          <input type="password" name="password" required placeholder='password'
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                          {/*"erorr message"*/}
                        </div>
                        <div className='button-container' aria-disabled={!validateForm()}>
                          <input type="submit" />
                        </div>
                      </form>
                    </div>
                  </div>
                  </div>
            )




}