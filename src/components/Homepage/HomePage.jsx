import Button from "../reusables/Button/Button";
import styles from "./Homepage.module.css"
import Ikon from "../../assets/ikon.svg"
import ellipse from "../../assets/ellipse.svg"
import frame from "../../assets/frame.svg"
import frame1 from "../../assets/frame1.svg"
import SocialIcons from "../reusables/Socialicons/SocialIcons";

function HomePage() {
  return(
    <div id="home" className={`flex  ${styles.home_container}`}>
      <div className={`flex animate ${styles.home_content}`}>
        <div className={`animate ${styles.img_container}`}>
          <img src={Ikon} alt="Usirusen Ikon" 
          className={`${styles.img}`}
          />
        </div>
        <div className={`flex ${styles.text_content}`}>
          <h1>
            Hi, I’m Usirusen<br/>
            Software Developer
          </h1>
          <p className={`${styles.text}`}>
            I’m Usirusen Ikon, a Software Developer based in Nigeria. 
            I create functional and  user-friendly websites that meets the needs of users.
          </p>
          <SocialIcons />
          <Button 
            className={`${styles.home_btn}`}
            text='Let’s Connect'
            />
        </div>

        <div className={`${styles.home_back_drop}`}>
          <img className={`animate ${styles.home_back_drop_img}`} src={ellipse} alt="ellipse" />
        </div>
        <div className={`${styles.home_back_drop1}`}>
          <img className={`animate ${styles.home_back_drop_img1}`} src={frame} alt="frame" />
        </div>
        <div className={`${styles.home_back_drop1}`}>
          <img className={`animate ${styles.home_back_drop_img1}`} src={frame1} alt="frame" />
        </div>
      </div>
    </div>
  )
}

export default HomePage;
