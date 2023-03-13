import Button from "../reusables/Button/Button";
import Ikon from "../../assets/ikon.svg"
import styles from "./aboutpage.module.css"

function AboutPage() {
  return(
    <div id="about" className={`flex animate ${styles.about_container}`}>
      <h2 className={`heading`}>About me</h2>
      <div className={`flex animate ${styles.about_content}`}>
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
            Hello!, I’m Usirusen, I'm a full-stack web developer student currently enrolled in
            Microverse, a remote software development school that uses pair-programming and real-world 
            projects to teach web development. I am enthusiastic about my work and, possess good
            communication skills, problem-solving ability, and teamwork. I endeavor to make things
            easily accessible for customers on with my front-end designs.
          </p>
        </div>
        <Button 
          text="Download CV"
          className={`${styles.cv_btn}`}
        />
      </div>
    </div>
  )
}

export default AboutPage;
