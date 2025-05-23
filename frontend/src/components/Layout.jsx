import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import './Layout.css'

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;