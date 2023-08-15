import React from 'react'
import Header from './common/Header'
import Sidebar from './common/Sidebar'
import Footer from './common/Footer'
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';

function ListDriver() {
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
                        <h1>All Driver</h1>
                        <Link to={`/registerDriver`} className="btn btn-primary my-3"> Register New Driver </Link>
                        <div className="row"> 
                           <div className='col-md-12'>
                                <table className='table table-striped'>
                                    <tr>
                                        <th>SNo</th>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Active Status</th>
                                        <th>Assign  Vehicle</th>
                                        <th>Action</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Sandip Gill</td>
                                        <td>sandip@as.com</td>
                                        <td>Active</td>
                                        <td>
                                        <Link to={`/registerOrganization`} className="btn btn-primary my-3"> Assign Vehicle </Link>
                                        </td>
                                        <td> Action </td>
                                        
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

export default ListDriver