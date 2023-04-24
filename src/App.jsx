import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App animate">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
