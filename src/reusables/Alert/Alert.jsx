import styles from "./Alert.module.css";
import { FcApproval } from 'react-icons/fc';

function Alert() {
  return (
    <div className={styles.alert}>
      <p className={styles.msg}>Message sent succesfully <FcApproval /></p>
    </div>
  );
}

export default Alert;
