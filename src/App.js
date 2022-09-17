import React from 'react'
import Dashboard from './Layouts/Dashboard.jsx';
import Navi from './Layouts/Navi'
import Footer from './Layouts/Footer.jsx';
import 'semantic-ui-css/semantic.min.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div >
      
      <Navi/>
     <Dashboard/>
     <Footer/>
     <ToastContainer position="bottom-right"/>
    
    </div>
  )
}

export default App