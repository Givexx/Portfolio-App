import Header from "./Header";
import Footer from "./Footer";

const PageTemplate = ({ children }) => {
  return (
    <div className="PageTemplate">
      <Header />
      <div className="middleDiv">{children}</div>
      <Footer />
    </div>
  );
};

export default PageTemplate;
