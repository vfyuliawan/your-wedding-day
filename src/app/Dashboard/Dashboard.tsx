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

    return (
      < >  
        <NavbarDashboard /> 
        <DashboardPage /> 
        <FooterDashboard />

      </>
    );
  };
  
  export default Dashboard;