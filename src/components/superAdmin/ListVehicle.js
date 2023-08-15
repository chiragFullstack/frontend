import React from 'react'
import Header from './common/Header'
import Sidebar from './common/Sidebar'
import Footer from './common/Footer'
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';


function ListVehicle() {
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
                        <h1>All Vehicles</h1>
                        <Link to={`/registerVehicle`} className="btn btn-primary my-3"> Add Vehicles </Link>
                        <div className="row"> 
                           <div className='col-md-12'>
                                <table className='table table-striped'>
                                    <tr>
                                        <th>SNo</th>
                                        <th>Truck No</th>
                                        <th>Plate No</th>
                                        <th>Vin No</th>
                                        <th>Model</th>
                                        <th>Make</th>
                                        <th>Year</th>
                                        <th>Activation Status</th>
                                        <th>Action</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>1231234</td>
                                        <td>PB10 MP 1234</td>
                                        <td>12121212</td>
                                        <td>2023</td>
                                        <td>2021</td>
                                        <td>2121</td>
                                        <td>Active</td>
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

export default ListVehicle