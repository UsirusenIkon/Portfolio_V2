import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Homepage/HomePage';
import AboutPage from './components/Aboutpage/AboutPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <AboutPage />
    </div>
  );
}

export default App;
