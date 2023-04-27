import ProjectRoutes from "../../components/ProjectPage/ProjectRoute/ProjectRoutes";
import Container from "../../reusables/Container/Container";
import styles from "./project.module.css";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

function Projects() {
  return (
    <Container className={`${styles.project}`}>
      <h1 className="head">Projects</h1>
      <Link to="/" 
        className="btn back">
        <RiArrowGoBackFill />
      </Link>
      <ProjectRoutes />
    </Container>
  )
}

export default Projects;
