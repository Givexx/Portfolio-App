import { Link } from "react-router-dom";
import mainLogoSvg from "./images/mainLogoSvg.svg";

const Header = () => {
  return (
    <div className="Header">
      <div className="logoDiv">
        <img src={mainLogoSvg} alt="logo" />
      </div>
      <div className="linkDiv">
        <Link className="link" to="/">
          HOME
        </Link>
        <Link className="link" to="/projects">
          PROJECTS
        </Link>
        <Link className="link" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
