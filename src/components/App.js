import Home from "./HOME/Home";
import About from "./ABOUT/About";
import Training from "./TRAININGS/Training";
import Scholarship from "./SCHOLARSHIP/Scholarship";
import ScrollToTop from "./ScrollToTop"; // Import ScrollToTop
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllScholarships from "./SCHOLARSHIP/AllScholarships";
import Puzzles from "./PUZZLES/Puzzles";
import Publications from "./PUBLICATIONS/Publications";
export default function App() {
  return (
    <>
      <Router>
        {/* Include ScrollToTop component here */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ABOUT/About" element={<About />} />
          <Route path="/TRAININGS/Training" element={<Training />} />
          <Route path='/SCHOLARSHIP/Scholarship' element={<Scholarship />} />
          <Route path='/SCHOLARSHIP/AllScholarships' element={<AllScholarships />} />
          <Route path='/PUZZLES/Puzzles' element={<Puzzles/>}/>
          <Route path= '/PUBLICATIONS/Publications' element={<Publications/>}/>
        </Routes>
      </Router>
    </>
  );
}
