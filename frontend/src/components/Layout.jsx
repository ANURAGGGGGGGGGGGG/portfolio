import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Chatbot from '../components/Chatbot/Chatbot';
import './Layout.css'

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Chatbot />
    </>
  );
};

export default Layout;