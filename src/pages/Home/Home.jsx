import HomePage from '../../components/Homepage/HomePage';
import AboutPage from '../../components/Aboutpage/AboutPage';
import SkillsPage from '../../components/Skillspage/SkillsPage';
import ProjectsIndex from '../../components/ProjectPage/ProjectsPage/ProjectsIndex';
import ContactPage from '../../components/ContactPage/ContactPage';

function Home() {
  return (
    <>
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectsIndex />
      <ContactPage />
    </>
  )
}

export default Home;
