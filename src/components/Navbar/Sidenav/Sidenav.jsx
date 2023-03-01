import { useState } from 'react';
import navData from '../NavData/NavData';
import Button from '../../reusables/Button/Button';
import styles from'./Sidenav.module.css';
import SocialIcons from '../../reusables/Socialicons/SocialIcons';

function Sidenav() {
  const [open, setopen] = useState(false);
  const onClickHandler = () => {
    setopen(!open);
  };

  return (
    <div>
      <Button
        className={`${styles.hamburger_menu}  ${open ? styles.hm_style : ''}`}
        onClick={onClickHandler}
        text={open ? '</Ik>' : '<Ik>'}
      />
      <div className={`flex ${styles.nav_content} ${open ? styles.open : styles.close }`}>
        <ul className={`flex ${styles.nav_list}`}>
          {navData.map((item) => (
            <a key={item.id} className={`flex ${styles.nav_item}`} href={item.link}>
              <span>{item.icon}</span>
              <span className={`flex ${styles.nav_text}`}>{item.text}</span>
            </a>
          ))}
        </ul>
        <div className={`flex ${styles.nav_icons}  ${open ? styles.see : styles.hide}`}>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
