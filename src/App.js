import React from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages';
import About from './pages/about';
import Blog from './pages/blog';
import Giving from './pages/giving';
import AboutUs from './pages/about-us';
// import WhooWeAre from './pages/about-us';
// import SignUp from './pages/signup';
import Contact from './pages/contact';
import CusNavbar from "../src/components/layouts/navbar";
// import Usestate from "./pages/usestate";
import Article from './pages/article';
// import Propscon from './pages/propscon';

function App() {
  return (
    <Router>
    <CusNavbar />
    <Routes>
        <Route  path='/' exact element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/giving' element={<Giving />} />
        <Route path='/about-us' element={<AboutUs />} />
    
        <Route path='/article' element={<Article />} />
        
    </Routes>
    </Router>
  );
}

export default App;
