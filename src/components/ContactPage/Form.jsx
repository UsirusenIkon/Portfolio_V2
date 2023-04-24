import { useEffect, useState } from 'react';
import Button from '../../reusables/Button/Button';
import styles from './contactpage.module.css';
import { FcApproval } from 'react-icons/fc';
import Alert from '../../reusables/Alert/Alert';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [msgError, setMsgError] = useState('');
  const [submit, setSubmit] = useState(false);

  const [canSubmit, setCanSubmit] = useState(false);
  useEffect(() => {
    if (
      typeof msgError === 'object' &&
      typeof emailError === 'object' &&
      typeof nameError === 'object'
    ) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [nameError, emailError, msgError]);

  const nameChangeHandler = (e) => {
    setName(e.target.value);

    if (e.target.value === '') {
      setNameError('should not be empty');
    } else if (e.target.value.length >= 29) {
      setNameError('is too long');
    } else {
      setNameError(<FcApproval />);
    }
  };

  const emailChangeHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);

    const regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (e.target.value === '') {
      setEmailError('should not be empty');
    } else if (!regEmail.test(e.target.value)) {
      setEmailError('is not valid');
    } else {
      setEmailError(<FcApproval />);
    }
  };

  const msgChangeHandler = (e) => {
    setMessage(e.target.value);

    if (e.target.value === '') {
      setMsgError('should not be empty');
    } else {
      setMsgError(<FcApproval />);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (canSubmit) {
      setSubmit(true);

      setTimeout(() => {
        setSubmit(false);
        e.target.submit();
      }, 3500);
    }
  };

  return (
    <form
      className={`flex ${styles.form}`}
      action="https://formspree.io/f/xwkzpvdn"
      method="post"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name">
          Name <span>{nameError}</span>
        </label>
        <input
          name="fullname"
          type="text"
          onChange={nameChangeHandler}
          maxLength="30"
          className={`flex ${styles.form_input}`}
          placeholder="Enter Your Name"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email <span>{emailError}</span></label>
        <input
          name="email"
          type="text"
          onChange={emailChangeHandler}
          className={`flex ${styles.form_input}`}
          maxLength="30"
          placeholder="Enter Your Email address"
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message <span>{msgError}</span></label>
        <textarea
          name="message"
          onChange={msgChangeHandler}
          className={`flex ${styles.textarea} ${styles.form_input}`}
          placeholder="Enter your message"
          maxLength="500"
          required
        />
      </div>
      {submit ? <Alert /> : null}
      <Button disabled={!canSubmit} className={styles.btn} text="Submit" />
    </form>
  );
}

export default Form;
