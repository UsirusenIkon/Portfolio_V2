import { useState } from 'react';
import projectData from '../../../data/projectData';
import { ArrowBackRounded, ArrowForwardRounded } from '@mui/icons-material';
import styles from './Projectdetails.module.css';
import Button from '../../../reusables/Button/Button';
import Container from '../../../reusables/Container/Container';
import { FaBeer } from "react-icons/fa";
import { SiBattledotnet } from "react-icons/si";
import { Link } from 'react-router-dom';
import './Projectdetails.module.css';

function ProjectsDetailsPage({ payload }) {
  return (
    <Container className={styles.project}>
      <div className={`flex ${styles.project_cards}`}>
        <h1>{payload.title}</h1>
        <div className={`flex ${styles.link}`}>
          <Link to={payload.link.seeLive} target="_blank" className={`btn ${styles.btn_link}`}>
            See live
          </Link>
          <Link to={payload.link.sources} target="_blank" className={`btn ${styles.btn_link}`}>
            See Source
          </Link>
        </div>
        <div className="cards-image flex">
          <img
            src={payload.featuredImage.url}
            className={`flex ${styles.img}`}
            alt={payload.featuredImage.alt}
          />
        </div>
        <div className={`flex ${styles.project_content}`}>
          <div className={`flex ${styles.project_details}`}>
            <p className="topic">
              {payload.details.customer}
              <span className={`${styles.dott}`}>
                <SiBattledotnet className={styles.dot}/>
                {payload.details.job}
                <SiBattledotnet className={styles.dot}/>
                {payload.details.year}
              </span>
            </p>
          </div>
          <ul className={`flex ${styles.tech_grp}`}>
            <li className={styles.backdrop}>{payload.technologies.html}</li>
            <li className={styles.backdrop}>{payload.technologies.css}</li>
            <li className={styles.backdrop}>{payload.technologies.js}</li>
            <li className={styles.backdrop}>{payload.technologies.ruby}</li>
          </ul>
          <p className={`flex ${styles.description}`}>{payload.description.more}</p>
        </div>
      </div>
    </Container>
  );
}

export default ProjectsDetailsPage;
