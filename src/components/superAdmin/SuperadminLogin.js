import React from 'react'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import axios from 'axios';


function SuperadminLogin() {
    const [username, setUserName]=useState();
    const [password, setPassword]=useState();
    const [userError, setuserError]=useState();
    
    const checkLogin =()=>{

    }

  return (
    <>
      <div className="container-fluid login">
            <div className="row">
                <div className='col-md-12'>
                    <div className='container mt-3'>
                    <h1>Super Admin Login</h1>
                    <form>
                        <div className="form-group">
                            <input type="text" name="userName" 
                                placeholder='Enter User Name'
                                className='form-control'
                                value={username}
                                onChange={(e)=>setUserName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" name="userPassword" 
                                placeholder='Enter Password'
                                className='form-control'
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                        <input type="button" value="Sign In" 
                        className="btn btn-primary form-control button"
                        onClick={()=>{
                            checkLogin();
                        }}
                        />
                       
                        <span className="error">{userError}</span>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SuperadminLogin