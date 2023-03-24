import Container from '../../reusables/Container/Container';
import styles from './contactpage.module.css';
import SocialIcons from '../../reusables/Socialicons/SocialIcons';
import Button from '../../reusables/Button/Button';
import { MdPhoneCallback } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import { HiMail } from 'react-icons/hi';

function ContactPage() {
  return (
    <Container id="contact" className={`${styles.contactpage}`}>
      <div className={`heading`}>
        <h2 className="flex head">
          <MdPhoneCallback />
          Contact me
        </h2>
        <p>
          <b>Let’s connect</b>
        </p>
      </div>
      <div className={`flex box_shadow ${styles.contact}`}>
        <div className={`flex ${styles.contact_info}`}>
          <div className={`flex ${styles.info_content}`}>
            <div className={`flex ${styles.info}`}>
              <h5>Get in touch</h5>
              <p className={`flex ${styles.pt}`}>
                <ImLocation2 />
                Akwaibom, Nigeria
              </p>
              <p className={`flex ${styles.pt}`}>
                <HiMail />
                Lexicon048@gmail.com
              </p>
              <p className={`flex ${styles.pt}`}>
                <MdPhoneCallback />
                +234 915 447 1778
              </p>
            </div>
            <div className={`flex ${styles.info}`}>
              <h5>Lets connect</h5>
              <SocialIcons className={styles.icons}/>
            </div>
          </div>
        </div>
        <div className={`flex ${styles.form_content}`}>
          <h5>Lets's make something amazing!</h5>
          <form
            className={`flex ${styles.form}`}
            action="https://formspree.io/f/xwkzpvdn"
            method="post"
          >
            <label for="user-name">
              <input
                name="fullname"
                className={`flex ${styles.form_input}`}
                type="text"
                placeholder="Full Name"
                maxlength="30"
                required
              />
            </label>
            <label for="user-email">
              <input
                name="email"
                className={`flex ${styles.form_input}`}
                type="text"
                placeholder="Email address"
                maxlength="30"
                id="user-email"
                required
              />
            </label>
            <label for="user-message">
              <textarea
                name="message"
                className={`flex ${styles.textarea} ${styles.form_input}`}
                placeholder="Write your message here"
                maxlength="500"
                id="user-message"
                required
              ></textarea>
            </label>
            <Button className={styles.btn} text="Let’s Connect" />
          </form>
        </div>
      </div>
    </Container>
  );
}

export default ContactPage;
