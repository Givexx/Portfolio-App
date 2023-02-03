import homeImg from "./images/homeImg.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="homeDivMiddle">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="div2">
        <div className="homeDiv1">
          <p className="nickName">Hi! I'm Givi Abuladze!</p>
          <p>Front-End ReactJs Developer.</p>
          <p>
            These are some of the major languages, technologies, tools and
            platforms I have worked with:
          </p>
          <p>
            JavaScript / ReactJs / TailwindCss / Bootstrap / Firebase / Strapi /
            Git / Github / JQuery / Sass / Html / Css.
          </p>
        </div>
        <div className="homeDiv2">
          <img className="homeImg" src={homeImg} alt="homeImg" />
        </div>
      </div>
      <div className="div3"></div>
    </div>
  );
};

export default Home;
