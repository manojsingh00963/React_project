import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsApp from './NewsApp';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import BackScroll from './Components/BackScroll';
import DownScroll from './Components/DownScroll';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes using 'element' prop */}
        <Route path="/" element={
          <>
            <NewsApp />
            <Footer />
          </>
        } />

        <Route path="/about" element={<>
          <Navbar />
          <About />
          <Footer />
        </>} />

        <Route path="/contact" element={
          <>
            <Navbar />
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
      <DownScroll/>
      <BackScroll/>
    </Router>
  );
}

export default App;
