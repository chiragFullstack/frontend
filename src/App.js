import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SuperadminLogin from './components/superAdmin/SuperadminLogin';
import Dashboard from './components/superAdmin/Dashboard';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import RegisterDriver from './components/superAdmin/RegisterDriver';
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
