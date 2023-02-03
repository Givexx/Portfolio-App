import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Projects from "./Projects";
import Error from "./Error";
import Home from "./Home";
import PageTemplate from "./PageTemplate";
function App() {
  return (
    <div id="App">
      <PageTemplate>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </PageTemplate>
    </div>
  );
}

export default App;
