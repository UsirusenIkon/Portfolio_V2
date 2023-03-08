import { useState } from 'react';
import navData from '../NavData/NavData';
import Button from '../../reusables/Button/Button';
import styles from'./Sidenav.module.css';
import SocialIcons from '../../reusables/Socialicons/SocialIcons';
import { WbSunny, DarkMode } from '@mui/icons-material';
import useTheme from '../../../hooks/useTheme';

function Sidenav() {
  const [open, setopen] = useState(false);
  const onClickHandler = () => {
    setopen(!open);
  };

  const [theme, setTheme] = useTheme();

  return (
    <div className={`animate ${styles.Sidenav}`}>
      <Button
        className={`${styles.hamburger_menu}  ${open ? styles.hm_style : ''}`}
        onClick={onClickHandler}
        text={open ? '</Ik>' : '<Ik>'}
      />
      <div className={`flex ${styles.nav_content} ${open ? styles.open : styles.close }`}>
        <ul className={`flex ${styles.nav_list}`}>
          {navData.map((item) => (
            <a key={item.id}
            className={`flex ${styles.nav_item}  ${open ? styles.side_open : styles.side_close }`} 
            href={item.link}
            >
              <span>{item.icon}</span>
              <span
              onClick={onClickHandler}
              className={`flex ${styles.nav_text}`}
              >
                {item.text}</span>
            </a>
          ))}
        </ul>
        <div className={`flex ${styles.theme}  ${open ? styles.theme_open : styles.theme_close }`}>
          {theme === 'dark' ? 
            <WbSunny onClick={() => setTheme('light')} /> :
            <DarkMode onClick={() => setTheme('dark')} />
          }
        </div>

        <div className={`flex ${styles.nav_icons}  ${open ? styles.see : styles.hide}`}>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
