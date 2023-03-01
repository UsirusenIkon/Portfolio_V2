import Button from "../reusables/Button/Button";
import Ikon from "../../assets/ikon.svg"
import styles from "./aboutpage.module.css"

function AboutPage() {
  return(
    <div id="about" className={`flex ${styles.about_container}`}>
      <h2 className={`heading`}>About me</h2>
      <div className={`flex ${styles.about_content}`}>
        <div className={`flex ${styles.about_header}`}>
          <div className={`flex ${styles.img_container}`}>
            <img src={Ikon} alt="Usirusen Ikon" 
            className={`${styles.img}`}
            />
          </div>
          <div>
            <h3>Usirusen Ikon</h3>
            <p>Frontend developer based in Akwa Ibom, Nigeria</p>
          </div>
        </div>
        <div>
          <p>
            My name is Usirusen Ikon. I have acquired and sharpened Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Cursus odio ultricies scelerisque blandit.
            Ut at vel quam nascetur facilisi aliquam. Magna mauris mi vitae urna donec pellentesque at.
            Cursus odio ultricies scelerisque blandit. Ut at vel quam nascetur facilisi aliquam.
            Magna mauris mi vitae urna donec pellentesque at.
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
