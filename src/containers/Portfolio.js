import React from 'react';
import '../styles/portfolio.scss';
import {Link} from 'react-router-dom';

function Portfolio() {
  return (
    <div className='container'>
     <section className='primary'>
        <nav className='primaryTitle'>
          <h1>Hi,I'm Anuruddha Bandara</h1>
        </nav>
        <div className='primaryIntro'>
          <nav className='primaryIntroNavbar'>
            <div className='primaryIntroNavbarSquare'>
              <div className='primaryIntroNavbarSquareOne'></div>
              <div className='primaryIntroNavbarSquareTwo'></div>
              <div className='primaryIntroNavbarSquareThree'></div>
            </div>
            <div className='primaryIntroNavbarContact'>
              <Link target='_blank' to='/Contact'>Contact</Link>
            </div>
          </nav>
          <div className='primaryIntroAbout'>
            <img className='primaryIntroAboutImage' src='./assets/profile1.jpg'/>
            <div className='primaryIntroAboutDescription'>
              <h3>What I Do</h3>
              <p>Graduated from SLIIT. Currently  <br/>  working on some projects.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='secondary'>
        <div className='secondaryDetails'>
          <div className='secondaryDetailsAbout'>
            <h2>More about me !</h2>
            <p>An adaptable, responsible, self-motivated and organized  graduate in B.Sc. Special (Hons) in Information Technology at SLIIT.<br/><br/>
              I build new projects using react. Those projects were uploaded <br/> here - <a target='_blank' href='https://github.com/Anuruddha00'>GitHub</a></p>
          </div>
          <div className='secondaryDetailsExpertise'>
            <h2>TOP EXPERTISE</h2>
            <p>Web developer (React) : <a target='_blank' href='./assets/resume.pdf'>Download Resume</a></p>
            <div className='secondaryDetailsExpertiseLanguage'>
              <ul>
                <li>ReactJS</li>
                <li>PHP</li>
                <li>Java</li>
                <li>HTML/CSS</li>
              </ul>
              <ul>
                <li>Octave</li>
                <li>Git</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='footer'>
        <div className='footerUrl'>
          <h2>You can find me on <a target='_blank' href='https://www.linkedin.com/in/anuruddha-bandara-216352193/'>LinkedIn</a> , <a target='_blank' href='https://twitter.com/Anurudd07961521'>Twitter</a> and view my recent projects on  <a target='_blank' href='https://github.com/Anuruddha00'>GitHub</a> </h2>
        </div>
      </section>

    </div>
  );
}

export default Portfolio;
