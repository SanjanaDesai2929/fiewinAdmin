import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './style.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter } from 'react-router-dom'
import Route from './Router/Route'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-toastify/dist/ReactToastify.css';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  function clearStorage() {

    let session = sessionStorage.getItem('register');

    if (session == null) {

      localStorage.removeItem('name');


    }
    sessionStorage.setItem('register', 1);
  }
  window.addEventListener('load', clearStorage);
  return (
    <>

      <BrowserRouter>
        <Route />
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App