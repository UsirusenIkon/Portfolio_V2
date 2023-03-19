import InfoIcon from '@mui/icons-material/Info';
import Button from "../../reusables/Button/Button";
import Ikon from "../../assets/ikon.svg"
import styles from "./aboutpage.module.css"
import Container from '../../reusables/Container/Container';

function AboutPage() {
  return(
    <Container id="about" className={`flex ${styles.about_container}`}>
      <div className={`heading`}>
        <h2 className='flex head'>
          <InfoIcon />About me
        </h2>
        <p><b>Bio</b></p>
      </div>
      <div className={`flex animate box_shadow  ${styles.about_content}`}>
        <div className={`flex ${styles.about_header}`}>
          <div className={`flex ${styles.img_container}`}>
            <img src={Ikon} alt="Usirusen Ikon" 
            className={`${styles.img}`}
            />
          </div>
          <div>
            <h3>Usirusen Ikon</h3>
            <p className={`${styles.bio}`}>Full-stack Software developer based in Akwa Ibom, Nigeria</p>
          </div>
        </div>
        <div>
          <p className={`${styles.bio_content}`}>
            Hello! I’m Usirusen, I'm a full-stack web developer student currently enrolled in
            Microverse, a remote software development school that uses pair-programming and real-world 
            projects to teach web development. I am enthusiastic about my work and, possess good
            communication skills, problem-solving ability, and teamwork. I endeavor to make things
            easily accessible for customers on with my front-end designs.
          </p>
        </div>
        <Button 
          text="Get My Resume"
          className={`${styles.cv_btn}`}
        />
      </div>
    </Container>
  )
}

export default AboutPage;
