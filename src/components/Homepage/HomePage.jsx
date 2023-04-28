import { Link } from "react-router-dom";
import Button from "../../reusables/Button/Button";
import styles from "./Homepage.module.css";
import Ikon1 from "../../assets/Ikon.svg";
import ellipse from "../../assets/ellipse.svg";
import frame1 from "../../assets/frame1.svg";
import SocialIcons from "../../reusables/Socialicons/SocialIcons";
import Container from "../../reusables/Container/Container";

function HomePage() {
  return(
    <Container id="home" className={`flex ${styles.home_container}`}>
      <div className={`flex animate ${styles.home_content}`}>
        <div className={`animate box_shadow ${styles.img_container}`}>
          <img src={Ikon1} alt="Usirusen Ikon" 
          className={styles.img}
          />
        </div>
        <div className={`flex ${styles.text_content}`}>
          <h1>
            Hi, I’m Usirusen<br/>
            Software Developer
          </h1>
          <p className={styles.text}>
            I’m Usirusen Ikon, a Software Developer based in Nigeria. 
            I create functional and  user-friendly websites that meets the needs of users.
          </p>
          <SocialIcons 
            className={`${styles.home_icons}`}
          />
          <Link to='#contact'
            reloadDocument={'#contact' === '/' ? false : true}
            >
            <Button 
              className={`${styles.home_btn}`}
              type='button'
              text='Let’s Connect'
            />
          </Link>
        </div>
      </div>
      <div className={`${styles.home_back_drop1}`}>
        <svg className={`${styles.svg_img}`}>
          <use width={'100%'} href={`${frame1}#img`}></use>
        </svg>
      </div>
      <div className={`${styles.home_back_drop}`}>
        <svg className={`${styles.svg_ellipse}`}>
          <use width={'100%'} href={`${ellipse}#img`}></use>
        </svg>
      </div>
    </Container>
  )
}

export default HomePage;
