import React from 'react'
import Header from './common/Header'
import Sidebar from './common/Sidebar'
import Footer from './common/Footer'

function RegsiterOrganization() {
  return (
    <>
     <Header/>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar/>
                </div>
                <div className='col-md-10 p-3'>
                    <div className="container-fluid box">
                        <h1> Register Organization</h1>
                        <div className="row"> 
                            <form method="post" >
                            <div className='form-group my-2 p-1'>
                                <label>Organization Name</label>
                                <input type="text" name="organizationName" placeholder='Enter Organization Name' className='form-control'/>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Enter Email</label>
                                <input type="email" name="Email" placeholder='Enter Email' className='form-control'/>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Enter User Name</label>
                                <input type="text" name="userName" placeholder='Enter User Name' className='form-control'/>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Enter Password</label>
                                <input type="password" name="Password" placeholder='Enter Password' className='form-control'/>
                            </div>
                          
                            <div className='form-group my-2 p-1'>
                                <label>Enter Mobile Number</label>
                                <input type="number" name="mobileNumber" placeholder='Enter Mobile Number' className='form-control'/>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Enter Address</label>
                                <input type="text" name="organizationAddreaa" placeholder='Enter Organization Address' className='form-control'/>
                            </div>                
                            <div className='form-group my-2 p-1'>
                                <label>Enter MC No (Motor Carrier No.)</label>
                                <input type="text" name="mcNumber" placeholder='Enter Motor Carrier Number' className='form-control'/>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <input type="submit" className='btn btn-primary form-control' value="save"/>
                            </div>
                          </form>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
  
    </>  
  )
}

export default RegsiterOrganization