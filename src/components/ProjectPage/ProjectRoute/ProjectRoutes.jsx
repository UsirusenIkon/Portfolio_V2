import projectData from '../../../data/projectData';
import styles from './projectRoutes.module.css';
import Button from '../../../reusables/Button/Button';
import Container from '../../../reusables/Container/Container';
import { Link } from 'react-router-dom';

function ProjectRoutes() {
  return (
    <Container id='id' className={`flex ${styles.project}`}>
      <div className={`${styles.project_container}`}>
      {projectData.map((card) => (
        <div key={card.id} className={`flex box_shadow ${styles.project_cards}`}>
          <div className="flex">
            <img
              src={card.featuredImage.url}
              className={`flex ${styles.img}`}
              alt={card.featuredImage.alt}
            />
          </div>
          <div className={`flex ${styles.project_content}`}>
            <div className={`flex ${styles.project_details}`}>
              <b>{card.title}</b>
            </div>
            <ul className={`flex ${styles.tech_grp}`}>
              <li className={styles.backdrop}>Stack :</li>
              <li className={styles.backdrop}>{card.technologies.html}</li>
              <li className={styles.backdrop}>{card.technologies.css}</li>
              <li className={styles.backdrop}>{card.technologies.js}</li>
              <li className={styles.backdrop}>{card.technologies.ruby}</li>
            </ul>
            <Link to={`/projects/${card.id}`}>
              <Button className={styles.btn} text="See Project" />
            </Link>
          </div>
        </div>
      ))}
      </div>
    </Container>
  );
}

export default ProjectRoutes;
