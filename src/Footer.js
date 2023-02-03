import githubSvg from "./images/githubSvg.svg";
import facebookSvg from "./images/facebookSvg.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <img className=".noHover" src={githubSvg} alt="githubImg" />
      <div>Developed by Givi Abuladze</div>
      <img className=".noHover" src={facebookSvg} alt="facebookImg" />
    </div>
  );
};

export default Footer;
