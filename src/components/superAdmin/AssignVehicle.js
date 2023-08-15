import React from 'react'
import Header from './common/Header'
import Sidebar from './common/Sidebar'
import Footer from './common/Footer'
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';


function AssignVehicle() {
  return (
    <>
         <Header/>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar/>
                </div>
                <div className='col-md-10 p-3'>
                    <div className="container-fluid box my-3">
                        <h1 className='my-3'>Assign Vehicle </h1>
                        <form>
                        <div className='row p-2'>
                            <div className='col-md-6 p-3'>
                                <div className='form-group'>
                                    <label>Assign Driver for the User Name:</label>
                                    <input type="text" name="userName" className='form-control'/>
                                </div>
                            </div>
                            <div className='col-md-6 p-3'>   
                                <div className='form-group'>
                                    <label>Select Vehicle:</label>
                                    <select className='form-control' name='vehicleName'>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-6 p-3'>   
                                <input type='submit' className='btn form-control btn-success my-3' value="Save"/>
                            </div>
                        </div>
                        </form>
                    </div> 
                    <div className="container-fluid box p-3">   
                        <div className="row"> 
                           <div className='col-md-12'>
                                <table className='table table-striped'>
                                    <tr>
                                        <th>SNo</th>
                                        <th>Driver Name</th>
                                        <th>Organization Name</th>
                                        <th>Assigned Date</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Sandip Gill</td>
                                        <td>Gholia </td>
                                        <td>15-08-2023 08:30:32 AM</td>
                                    </tr>
                                </table>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    
    </>
  )
}

export default AssignVehicle