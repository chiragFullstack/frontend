import React from 'react'
import Header from './common/Header'
import Sidebar from './common/Sidebar'
import Footer from './common/Footer'

function RegisterDriver() {
  return (<>
        <Header/>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar/>
                </div>
                <div className='col-md-10 p-3'>
                    <div className="container-fluid box">
                        <div className="row"> 
                            <form method="post" >
                            <div className='form-group my-2 p-1'>
                                <label>Enter First Name</label>
                                <input type="text" name="firstName" placeholder='Enter First Name' className='form-control'/>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Enter Last Name</label>
                                <input type="text" name="lastName" placeholder='Enter Last Name' className='form-control'/>
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
                                <label>Enter Email</label>
                                <input type="email" name="Email" placeholder='Enter Email' className='form-control'/>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Enter Mobile Number</label>
                                <input type="number" name="mobileNumber" placeholder='Enter Mobile Number' className='form-control'/>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Enter License Number</label>
                                <input type="text" name="licenseNumber" placeholder='Enter License Number' className='form-control'/>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Select Role</label>
                                <select name="role" className='form-control'>
                                    <option value="Driver">Driver</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Select State</label>
                                <select name="state" className='form-control'>
                                    <option value="At">At</option>
                                    <option value="Bt">Bt</option>
                                </select>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Expiration Date</label>
                                <input type="date" name="expirationDate" placeholder='Expiration Date' className='form-control'/>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Exempt</label>
                                <select name="exempt" className='form-control'>
                                    <option value="Exempt">Exempt</option>
                                    <option value="Non-Exempt">Non-Exempt</option>
                                </select>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Starting Period</label>
                                <input type="text" name="startingPeriod" placeholder='Starting Period' className='form-control'/>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Hos Rules</label>
                                <select name="hosRules" className='form-control'>
                                    <option value="US-8">US-8</option>
                                    <option value="US-7">US-7</option>
                                </select>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Allow Personal Name</label>
                                <select name="pernalName" className='form-control'>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Allow Yard Move</label>
                                <select name="yardMove" className='form-control'>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
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

export default RegisterDriver