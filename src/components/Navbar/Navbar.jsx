import './Navbar.css';
import '../../App.css';
// import Button from '../reusables/Button/Button';

function Navbar() {
  return (
    <section className="header-headline" id="home">
      <header className="header wf flex">
        <div className="header-content wf flex">
          <a href="#home" className="logo logo-items flex">
            <i className="logo-text">Ikon`s</i>
            <img className="logo-img" src="https://www.pngfind.com/pngs/m/168-1688149_web-clipart-cobweb-simple-spider-web-clipart-hd.png" alt="web" />
          </a>
          <nav className="navbar flex">
            <button className="hamburger-menu flex" type="button">
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </button>
            <ul className="nav-menu flex">
              <li className="item flex">
                <a href="#work" className="nav-link">Home</a>
              </li>
              <li className="item flex">
                <a href="#about" className="nav-link">About</a>
              </li>
              <li className="item flex">
                <a href="#contact" className="nav-link">Projects</a>
              </li>
              <li className="item flex">
                <a href="#contact" className="nav-link">Skills</a>
              </li>
              <li className="item flex">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
}

export default Navbar;
