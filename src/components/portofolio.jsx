import React from 'react';
import Navbar from './navbar';
import Home from './home';
import About from './about';
import Experience from './experience';
import Skills from './skills';
import Interests from './interests';
import Awards from './awards';
import './navbar.css';

class Portofolio extends React.Component {

  
  constructor() {
    super();
    this.state = {
      currentPage: "portofolio",
    };
  }
  
  render() {
    const { currentPage } = this.state;

    return (
      <div className="portofolio">
        <Navbar changePage={this.changePage} />
        <main>
          {currentPage === "home" && (
            <section id="home">
              <Home />
            </section>
          )}
          {currentPage === "about" && (
            <section id="about">
              <About />
            </section>
          )}
          {currentPage === "experience" && (
            <section id="experience">
              <Experience />
            </section>
          )}
          {currentPage === "skills" && (
            <section id="skills">
              <Skills />
            </section>
          )}
          {currentPage === "interest" && (
            <section id="interest">
              <Interests />
            </section>
          )}
          {currentPage === "awards" && (
            <section id="awards">
              <Awards />
            </section>
          )}
        </main>
      </div>
    );
  }
}

export default Portofolio;
