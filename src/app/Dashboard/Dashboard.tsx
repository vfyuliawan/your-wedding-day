"use client";

import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import FooterDashboard from "./Components/Footer/Footer";
import NavbarDashboard from "./Components/Navbar/Navbar";
import DashboardPage from "./Section/Page/Page"; 
import { AuthContextProvider } from '../services/AuthContext';

const Dashboard = () => {
    // useEffect(() => {
    //   import('bootstrap/dist/js/bootstrap.min.js')
    //     .then(() => { 
    //       console.error('Bootstrap JS has been successfully loaded');
    //     })
    //     .catch((error) => {
    //       console.error('Error loading Bootstrap JS:', error);
    //     });
    // }, []);

    return (
      < >  
        <NavbarDashboard /> 
        <DashboardPage /> 
        <FooterDashboard />

      </>
    );
  };
  
  export default Dashboard;