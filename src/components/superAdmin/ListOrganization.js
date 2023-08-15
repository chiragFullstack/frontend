import React from 'react'
import Header from './common/Header'
import Sidebar from './common/Sidebar'
import Footer from './common/Footer'
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
function ListOrganization() {
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
                        <h1>All Organization</h1>
                        <Link to={`/registerOrganization`} className="btn btn-primary my-3"> Register New Organization </Link>
                        <div className="row"> 
                           <div className='col-md-12'>
                                <table className='table table-striped'>
                                    <tr>
                                        <th>SNo</th>
                                        <th>Organization Name</th>
                                        <th>Contact No</th>
                                        <th>Company Address</th>
                                        <th>MC No.(Motor Carrier Number)</th>
                                        <th></th>
                                        <th>Action</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Speed Truckors</td>
                                        <td>9048984984</td>
                                        <td>Canada</td>
                                        <td>12121212</td>
                                        <td></td>
                                        <td>
                                        <Link to={`/registerOrganization`} className="btn btn-primary my-3"> Assign Driver </Link>
                                        </td>
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

export default ListOrganization