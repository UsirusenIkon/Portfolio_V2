import Container from '../../reusables/Container/Container';
import styles from './contactpage.module.css';
import SocialIcons from '../../reusables/Socialicons/SocialIcons';
import { MdPhoneCallback } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import { HiMail } from 'react-icons/hi';
import Form from './Form';

function ContactPage() {
  return (
    <Container id="contact" className={`flex ${styles.contactpage}`}>
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
                lexicon048@gmail.com
              </p>
              <p className={`flex ${styles.pt}`}>
                <MdPhoneCallback />
                +234 812 938 8705
              </p>
            </div>
            <div className={`flex ${styles.info}`}>
              <h5>Lets connect</h5>
              <SocialIcons className={styles.icons} />
            </div>
          </div>
        </div>
        <div className={`flex ${styles.form_content}`}>
          <h5>Lets's make something amazing!</h5>
          <Form />
        </div>
      </div>
    </Container>
  );
}

export default ContactPage;
