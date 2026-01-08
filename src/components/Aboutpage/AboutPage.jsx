import Button from '../../reusables/Button/Button';
import Ikon from '../../assets/Ikon2.svg';
import styles from './aboutpage.module.css';
import Container from '../../reusables/Container/Container';
import { RiInformationFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Container id="about" className={`flex ${styles.about_container}`}>
      <div className={`heading`}>
        <h2 className="flex head">
          <RiInformationFill />
          About me
        </h2>
        <p>
          <b>Bio</b>
        </p>
      </div>
      <div className={`flex animate box_shadow  ${styles.about_content}`}>
        <div className={`flex ${styles.about_header}`}>
          <div className={`flex ${styles.img_container}`}>
            <img src={Ikon} alt="Usirusen Ikon" className={`${styles.img}`} />
          </div>
          <div>
            <h3>Usirusen Ikon</h3>
            <p className={`${styles.bio}`}>
              Full-stack Software developer based in Akwa Ibom, Nigeria
            </p>
          </div>
        </div>
        <div className={`flex ${styles.bio_wrap}`}>
          <p className={`${styles.bio_content}`}>
            I am a full-stack web developer who builds scalable, user-centric
            applications with a strong emphasis on accessibility, performance,
            and clean architecture. I combine thoughtful front-end design with
            reliable back-end logic to deliver solutions that are intuitive for
            users and efficient for businesses. Known for clear communication,
            strong problem-solving skills, and effective collaboration, I
            consistently translate complex requirements into maintainable,
            real-world products.
          </p>
          <Link
            to="https://docs.google.com/document/d/1GhKqeDcHL_1Un8znD1nT4-okpNhIDOMUvExEGr2-h74/edit?usp=sharing"
            target="_blank"
          >
            <Button
              type="button"
              text="Get My Resume"
              className={`${styles.cv_btn}`}
            />
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default AboutPage;
