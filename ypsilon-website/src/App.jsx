import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Home from './pages/Home';
import SingleCourse from './components/SingleCourse';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="bg-gray-50 ">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/course/:id" element={<SingleCourse />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
