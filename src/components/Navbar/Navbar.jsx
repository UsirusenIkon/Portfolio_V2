import { Link, useLocation, useParams } from 'react-router-dom';
import './Navbar.css';
import '../../App.css';
import Sidenav from './Sidenav/Sidenav';
import projectData from '../../data/projectData';

function Navbar() {
  const location = useLocation();
  const { id } = useParams();
  const idx = projectData.find((project) => project.id === Number(id));
  console.log(idx);

  let content;

  if (location.pathname === '/') {
    content = (
      <Link className="logo flex" to="/">
        <i className="logo-text">Ikon`s</i>
        <img
          className="logo-img"
          src="https://www.pngfind.com/pngs/m/168-1688149_web-clipart-cobweb-simple-spider-web-clipart-hd.png"
          alt="web"
        />
      </Link>
    );
  } else if (location.pathname === '/projects') {
    content = (
      <Link className="logo flex" to="/">
        <i className="logo-text">Ikon`s</i>
        <img
          className="logo-img"
          src="https://www.pngfind.com/pngs/m/168-1688149_web-clipart-cobweb-simple-spider-web-clipart-hd.png"
          alt="web"
        />
      </Link>
    );
  } else if (location.pathname === `/projects/${idx.id}`) {
    content = (
      <Link className="logo flex" to="/">
        <i className="logo-text">Ikon`s</i>
        <img
          className="logo-img"
          src="https://www.pngfind.com/pngs/m/168-1688149_web-clipart-cobweb-simple-spider-web-clipart-hd.png"
          alt="web"
        />
      </Link>
    );
  }

  return (
    <div className="header flex animate">
      <div className="header-headline flex">{content}</div>
      <Sidenav />
    </div>
  );
}

export default Navbar;
