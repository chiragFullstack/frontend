import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SuperadminLogin from './components/superAdmin/SuperadminLogin';
import Dashboard from './components/superAdmin/Dashboard';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import RegisterDriver from './components/superAdmin/RegisterDriver';
import RegsiterOrganization from './components/superAdmin/RegsiterOrganization';
import ListOrganization from './components/superAdmin/ListOrganization';
import AssignDriver from './components/superAdmin/AssignDriver';
import ListDriver from './components/superAdmin/ListDriver';
import AssignVehicle from './components/superAdmin/AssignVehicle';
import ListVehicle from './components/superAdmin/ListVehicle';
import RegisterVehicle from './components/superAdmin/RegisterVehicle';
function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12'>
                
            </div>
        </div>
      </div>
      <Router>
        <Routes>
           <Route path="/" element={<SuperadminLogin/>}/>
           <Route path="/Dashboard" element={<Dashboard/>}/>
           <Route path="/registerDriver" element={<RegisterDriver/>}/>
           <Route path="/registerOrganization" element={<RegsiterOrganization/>}/>
           <Route path="/registerVehicle" element={<RegisterVehicle/>}/>

           <Route path="/listOrganization" element={<ListOrganization/>}/>
           <Route path="/listDriver" element={<ListDriver/>}/>
           <Route path="/listVehicle" element={<ListVehicle/>}/>
           <Route path="/assignDriver" element={<AssignDriver/>}/>
           <Route path="/assignVehicle" element={<AssignVehicle/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
