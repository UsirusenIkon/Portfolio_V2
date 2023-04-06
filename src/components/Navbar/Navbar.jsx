import { Link, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import '../../App.css';
import Sidenav from './Sidenav/Sidenav';
import projectData from '../../data/projectData';

function Navbar() {
  const [navBar, setNavBar] = useState(false);

  const colorSwap = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener('scroll', colorSwap);

  const location = useLocation();
  const { id } = useParams();
  const idx = projectData.find((project) => project.id === Number(id));

  let content;

  if (location.pathname === '/') {
    content = (
      <Link
      reloadDocument={'#home' === '/' ? false : true}
      className="logo flex" to="#home">
        <i className="logo-text">[Ikon]</i>
      </Link>
    );
  } else if (location.pathname === '/projects') {
    content = (
      <Link className="logo flex" to="/">
        <i className="logo-text">[Ikon]</i>
      </Link>
    );
  } else if (location.pathname === `/projects/${idx.id}`) {
    content = (
      <Link className="logo flex" to="/">
        <i className="logo-text">[Ikon]</i>
      </Link>
    );
  }

  return (
    <div className="header flex">
      <div
        className={`header-headline flex animate ${
          navBar ? 'transparent' : 'cream'
        }`}
      >
        {content}
      </div>
      <Sidenav />
    </div>
  );
}

export default Navbar;
