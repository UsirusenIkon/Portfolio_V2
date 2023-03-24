import Container from "../../reusables/Container/Container";
import styles from "./error.module.css";

function Error() {
  return (
    <Container className={`flex ${styles.error}`}>
      <h1>
        Oops <br />
        Page not found
      </h1>
    </Container>
  )
}

export default Error;
