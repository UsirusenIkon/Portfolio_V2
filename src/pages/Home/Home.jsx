import HomePage from '../../components/Homepage/HomePage';
import AboutPage from '../../components/Aboutpage/AboutPage';
import SkillsPage from '../../components/Skillspage/SkillsPage';
import ProjectsPage from '../../components/ProjectPage/ProjectsPage/ProjectsPage';
import ContactPage from '../../components/ContactPage/ContactPage';

function Home() {
  return (
    <>
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </>
  )
}

export default Home;
