import { useParams } from 'react-router-dom';
import ProjectsDetailsPage from '../../components/ProjectPage/ProjectDetailsPage/ProjectDetailsPage';
import projectData from '../../data/projectData';
import Container from '../../reusables/Container/Container';
import { Link } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import styles from './ProjectsDetails.module.css';

function ProjectsDetails() {
  const { id } = useParams();
  const projectCard = projectData.find((project) => project.id === Number(id));
  const onClickHandler = () => {
    console.log('goat')
  };

  return (
    <Container className={`animate ${styles.details}`}>
      <Link to="/projects"
        className={`btn back ${styles.btn}`}>
        <RiArrowGoBackFill />
      </Link>
      <ProjectsDetailsPage payload={projectCard} />
    </Container>
  );
}

export default ProjectsDetails;
