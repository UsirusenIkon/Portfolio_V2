import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useTheme from '../../../hooks/useTheme';
import navData from '../../../data/NavData';
import styles from './Sidenav.module.css';
import SocialIcons from '../../../reusables/Socialicons/SocialIcons';
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';

function Sidenav() {
  const width = window.innerWidth < 768;
  const [hover, setHover] = useState(-1);

  const [open, setopen] = useState(false);
  const onClickHandler = () => {
    setopen(!open);
  };

  const [theme, setTheme] = useTheme();
  const location = useLocation();

  const btn =
    location.pathname === '/' ? (
      <div
        className={`flex ${styles.hamburger_menu} ${
          open ? styles.hm_style : ''
        }`}
        onClick={onClickHandler}
      >
        <span className={`${styles.line} ${open ? styles.tilt : ''}`}></span>
        <span className={`${styles.line} ${open ? styles.hide : ''}`}></span>
        <span className={`${styles.line} ${open ? styles.rtilt : ''}`}></span>
      </div>
    ) : null;

  const content =
    location.pathname === '/' ? (
      <ul className={`flex ${styles.nav_list}`}>
        {navData.map((item) => (
          <Link
            key={item.id}
            className={`flex ${styles.nav_item}  ${
              open ? styles.side_open : styles.side_close
            }`}
            to={item.link}
            onClick={onClickHandler}
            reloadDocument={item.link === '/' ? false : true}
          >
            <span
              className={`flex animate ${
                open ? styles.icon_open : styles.icon_close
              }`}
              onMouseEnter={() => setHover(item.id)}
              onMouseLeave={() => setHover(-1)}
            >
              {item.icon}
            </span>
            <span
              className={`flex ${styles.nav_text}`}
            >
              {item.text}
            </span>
            {hover === item.id && !open ? (
              <div className={styles.hover_cover}>
                <span className={styles.hover}>{item.text}</span>
              </div>
            ) : null}
          </Link>
        ))}
        <div
          className={`flex ${styles.nav_icons} ${
            open ? styles.see : styles.hide
          }`}
        >
          <SocialIcons />
        </div>
      </ul>
    ) : null;

  return (
    <div className={`animate ${styles.Sidenav}`}>
      {btn}
      <div
        className={`flex ${styles.nav_content} ${
          open ? styles.open : styles.close
        }`}
      >
        {content}
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
              <label htmlFor="light">
                <BsFillSunFill />
              </label>
            </span>
          ) : (
            <span
              onClick={() => setTheme('dark')}
              className={`flex ${styles.theme_icons}`}
            >
              <MdDarkMode />
            </span>
          )}
        </div>
      </div>
        <div 
          onClick={onClickHandler}
          className={open ? styles.on : styles.off}></div>
    </div>
  );
}

export default Sidenav;
