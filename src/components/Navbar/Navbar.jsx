import './Navbar.css';
import '../../App.css';
import Sidenav from './Sidenav/Sidenav';

function Navbar() {
  return (
    <div className="header flex">
      <div className="header-headline flex">
        <a href="#home" className="logo flex">
            <i className="logo-text">Ikon`s</i>
            <img className="logo-img" src="https://www.pngfind.com/pngs/m/168-1688149_web-clipart-cobweb-simple-spider-web-clipart-hd.png" alt="web" />
        </a>
      </div>
      <Sidenav />
    </div>
  );
}

export default Navbar;
