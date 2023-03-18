import { useState } from 'react';
import projectData from '../../Projects/projectData';
import { ArrowBackRounded, ArrowForwardRounded } from '@mui/icons-material';
import styles from './carousel.module.css';
import Button from './../Button/Button';

function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = projectData.length;

  const handlePrevious = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className={styles.carousel}>
      <ArrowBackRounded
        className={`${styles.arrow} ${styles.back}`}
        onClick={handlePrevious}
      />
      <ArrowForwardRounded
        className={`${styles.arrow} ${styles.front}`}
        onClick={handleNext}
      />
      {projectData.map((card, id) => (
        <div
          key={card.id}
          className={`flex 
          ${card.id === current ? styles.active : styles.slide}
        `}
        >
          {id === current && (
            <div className={`flex ${styles.project_cards}`}>
              <div className="cards-image flex">
                <img
                  src={card.featuredImage.url}
                  className={`flex ${styles.img}`}
                  alt={card.featuredImage.alt}
                />
              </div>
              <div className={`flex ${styles.project_content}`}>
                <div className={`flex ${styles.project_details}`}>
                  <b>{card.title}</b>
                  <p className="topic">
                    {card.details.customer}
                    <span className="grey">
                      <i className="bx bxs-circle grey"></i>
                      {card.details.job}
                      <i className="bx bxs-circle grey"></i>
                      {card.details.year}
                    </span>
                  </p>
                </div>
                <p className="summary">{card.description.summary}</p>
                <ul className={`flex ${styles.tech_grp}`}>
                  <li className={styles.backdrop}>{card.technologies.html}</li>
                  <li className={styles.backdrop}>{card.technologies.css}</li>
                  <li className={styles.backdrop}>{card.technologies.js}</li>
                  <li className={styles.backdrop}>{card.technologies.ruby}</li>
                </ul>
                <Button className={styles.btn} text="See Project" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Carousel;
