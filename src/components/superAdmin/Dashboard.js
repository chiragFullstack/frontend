import React from 'react'
import Header from './common/Header'
import Sidebar from './common/Sidebar'
import Footer from './common/Footer'

function Dashboard() {
  return (
    <>
        <Header/>
        <div className='container-fluid full-height'>
            <div className='row'>
                <div className='col-md-3 sidebar'>
                    <Sidebar/>
                </div>
                <div className='col-md-9'>
                  <div className="row">
                    <div className='col-md-12 box'>
                      <div className='col-md-5 m-2' style={{background:'red'}}>
                          Drivers 
                      </div>
                      <div className='col-md-1' >
                          
                      </div>
                      <div className='col-md-5  m-2' style={{background:'green'}}>
                          Vehicles
                      </div>
                      <div className='col-md-5 m-2' style={{background:'yellow'}}>
                          DVIR Reports
                      </div>
                      <div className='col-md-1' >
                         
                      </div>
                      <div className='col-md-5  m-2' style={{background:'blue'}}>
                         Access Key
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

export default Dashboard