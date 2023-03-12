import { useState } from 'react';
import useTheme from '../../../hooks/useTheme';
import navData from '../NavData/NavData';
import Button from '../../reusables/Button/Button';
import styles from './Sidenav.module.css';
import SocialIcons from '../../reusables/Socialicons/SocialIcons';
import { WbSunny, DarkMode } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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
        Icon={open ? <CloseIcon /> : <MenuIcon />}
      />
      <div
        className={`flex ${styles.nav_content} ${
          open ? styles.open : styles.close
        }`}
      >
        <ul className={`flex ${styles.nav_list}`}>
          {navData.map((item) => (
            <a
              key={item.id}
              className={`flex ${styles.nav_item}  ${
                open ? styles.side_open : styles.side_close
              }`}
              href={item.link}
            >
              <span
                className={`flex animate ${
                  open ? styles.icon_open : styles.icon_close
                }`}
              >
                {item.icon}
              </span>
              <span
                onClick={onClickHandler}
                className={`flex ${styles.nav_text}`}
              >
                {item.text}
              </span>
            </a>
          ))}
          <div
            className={`flex ${styles.nav_icons}  ${
              open ? styles.see : styles.hide
            }`}
          >
            <SocialIcons />
          </div>
        </ul>
        <div
          className={`flex animate ${styles.theme}  ${
            open ? styles.theme_open : styles.theme_close
          }`}
        >
          {theme === 'dark' ? (
            <span
              onClick={() => setTheme('light')}
              className={`flex ${styles.theme_icons}`}
            >
              Light
              <WbSunny />
            </span>
          ) : (
            <span
              onClick={() => setTheme('dark')}
              className={`flex ${styles.theme_icons}`}
            >
              Dark
              <DarkMode />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
