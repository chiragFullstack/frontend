import React from 'react'
import Header from './common/Header'
import Sidebar from './common/Sidebar'
import Footer from './common/Footer'


function RegisterVehicle() {
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
                    <h1> Register Vehicles</h1>
                        <div className="row"> 
                            <form method="post" >
                            <div className='form-group my-2 p-1'>
                                <label>Truck Number</label>
                                <input type="text" name="truckNo" placeholder='Enter Truck Number' className='form-control'/>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Enter Plate Number</label>
                                <input type="text" name="plateNumber" placeholder='Enter Plate Number' className='form-control'/>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Enter Vin Number</label>
                                <input type="text" name="vinNumber" placeholder='Enter Vin Number' className='form-control'/>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Enter Model No.</label>
                                <input type="text" name="modelNumber" placeholder='Enter Model Number' className='form-control'/>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Make</label>
                                <input type="text" name="make" placeholder='Enter Make Number' className='form-control'/>
                            </div>
                            <div className='form-group my-2 p-1'>
                                <label>Enter Year</label>
                                <input type="text" name="year" placeholder='Enter Year' className='form-control'/>
                            </div>                     
                            <div className='form-group my-2 p-1'>
                                <input type="button" className='btn btn-primary form-control' value="save"/>
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

export default RegisterVehicle