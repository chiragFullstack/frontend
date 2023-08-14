import React from 'react'
import Header from './common/Header'
import Sidebar from './common/Sidebar'
import Footer from './common/Footer'

function Dashboard() {
  return (
    <>
        <Header/>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar/>
                </div>
                <div className='col-md-9'>
                    
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Dashboard