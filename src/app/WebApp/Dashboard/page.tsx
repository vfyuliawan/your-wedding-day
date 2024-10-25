"use client";

import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap-icons/font/bootstrap-icons.min.css';

import FooterDashboard from "./Components/Footer/Footer";
import NavbarDashboard from "./Components/Navbar/Navbar";
import DashboardPage from "./Section/Page/Page"; 
import HeaderView from '@/app/Theme/LuxuryTheme/Section/Header/HeaderView';
import HeaderDashboard from './Components/Header/Header';

const DashboardView = () => { 

    return (
      < >  
        {/* <NavbarDashboard />  */}
        <HeaderDashboard/>
        <DashboardPage /> 
        <FooterDashboard />

      </>
    );
  };
  
  export default DashboardView;