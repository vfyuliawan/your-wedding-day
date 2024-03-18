import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import FooterDashboard from "./Section/Footer/Footer";
import NavbarDashboard from "./Section/Navbar/Navbar";
import DashboardPage from "./Section/Page/Page";

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