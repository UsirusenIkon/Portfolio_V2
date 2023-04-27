import Container from '../../reusables/Container/Container';
import styles from './error.module.css';
import Ikon from '../../assets/Ikon1.svg';

function Error() {
  return (
    <Container className={`flex ${styles.error}`}>
      <h1 className={styles.text}>
        Oops <br />
        Page not found
      </h1>
      <div className={styles.img_wrap} />
        <img className={styles.img} src={Ikon} alt="" />
    </Container>
  );
}

export default Error;
