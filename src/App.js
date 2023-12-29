import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Experience from './components/experience';
import Skills from './components/skills';
import Interests from './components/interests';
import Awards from './components/awards';
import Portofolio from './components/portofolio';

class App extends React.Component {
  render() {
    return (
      <Router>
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Portofolio />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/interests" element={<Interests />} />
      <Route path="/awards" element={<Awards />} />
    </Routes>
  </div>
</Router>

    );
  }
}

export default App;
