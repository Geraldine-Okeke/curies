import Home from "./HOME/Home";
import About from "./ABOUT/About";
import Training from "./TRAININGS/Training";
import Scholarship from "./SCHOLARSHIP/Scholarship";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ABOUT/About" element={<About />} />
          <Route path="/TRAININGS/Training" element={<Training/>} />
          <Route path='/SCHOLARSHIP/Scholarship' element={<Scholarship/>}/>
        </Routes>
      </Router>
    </>
  );
}
