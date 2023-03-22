import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import useTheme from '../../../hooks/useTheme';
import navData from '../../../data/NavData';
import Button from '../../../reusables/Button/Button';
import styles from './Sidenav.module.css';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HomeIcon from '@mui/icons-material/Home';
import SocialIcons from '../../../reusables/Socialicons/SocialIcons';
import { WbSunny, DarkMode } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import projectData from '../../../data/projectData';

function Sidenav() {
  const [open, setopen] = useState(false);
  const onClickHandler = () => {
    setopen(!open);
  };

  const [theme, setTheme] = useTheme();

  const location = useLocation();
  // const content = location.pathname === '/' ? (
  //   <ul className={`flex ${styles.nav_list}`}>
  //     {navData.map((item) => (
  //       <Link
  //         key={item.id}
  //         className={`flex ${styles.nav_item}  ${
  //           open ? styles.side_open : styles.side_close
  //         }`}
  //         to={item.link}
  //         reloadDocument={item.link === '/' ? false : true}
  //       >
  //         <span
  //           className={`flex animate ${
  //             open ? styles.icon_open : styles.icon_close
  //           }`}
  //         >
  //           {item.icon}
  //         </span>
  //         <span onClick={onClickHandler} className={`flex ${styles.nav_text}`}>
  //           {item.text}
  //         </span>
  //       </Link>
  //     ))}
  //     <div
  //       className={`flex ${styles.nav_icons} ${
  //         open ? styles.see : styles.hide
  //       }`}
  //     >
  //       <SocialIcons />
  //     </div>
  //   </ul>
  // ) : (
  //   <Link
  //     className={`flex ${styles.nav_item}  ${
  //       open ? styles.side_open : styles.side_close
  //     }`}
  //     to={'/'}
  //   >
  //     <span
  //       className={`flex animate ${
  //         open ? styles.icon_open : styles.icon_close
  //       }`}
  //     >
  //       <HomeIcon />
  //     </span>
  //     <span onClick={onClickHandler} className={`flex ${styles.nav_text}`}>
  //       Home
  //     </span>
  //   </Link>
  // );
  const { id } = useParams();
  const idx = projectData.find((project) => project.id === Number(id));
  console.log(idx);

  let content;

  if (location.pathname === '/') {
    content = (
      <ul className={`flex ${styles.nav_list}`}>
        {navData.map((item) => (
          <Link
            key={item.id}
            className={`flex ${styles.nav_item}  ${
              open ? styles.side_open : styles.side_close
            }`}
            to={item.link}
            reloadDocument={item.link === '/' ? false : true}
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
    );
  } else if (location.pathname === '/projects') {
    content = (
      <Link
        className={`flex ${styles.nav_item}  ${
          open ? styles.side_open : styles.side_close
        }`}
        to={'/'}
      >
        <span
          className={`flex animate ${
            open ? styles.icon_open : styles.icon_close
          }`}
        >
          <HomeIcon />
        </span>
        <span onClick={onClickHandler} className={`flex ${styles.nav_text}`}>
          Home
        </span>
      </Link>
    );
  } else if(location.pathname === `/projects/${idx.id}`) {
    content = (
      <Link
        className={`flex ${styles.nav_item}  ${
          open ? styles.side_open : styles.side_close
        }`}
        to="/projects"
      >
        <span
          className={`flex animate ${
            open ? styles.icon_open : styles.icon_close
          }`}
        >
          <AutoStoriesIcon />,
        </span>
        <span onClick={onClickHandler} className={`flex ${styles.nav_text}`}>
          Projects
        </span>
      </Link>
    );
  }

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
