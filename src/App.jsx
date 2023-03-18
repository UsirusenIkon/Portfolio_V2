import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Homepage/HomePage';
import AboutPage from './components/Aboutpage/AboutPage';
import SkillsPage from './components/Skillspage/SkillsPage';
import ProjectsPage from './components/Projects/ProjectsPage';

function App() {
  return (
    <div className="App animate">
      <Navbar />
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
    </div>
  );
}

export default App;
