'use client'
import React from 'react';
import './style.css'
function About() {
  return (
    <section className="section pt-0" id="about" >
      <div className="container text-center">
        <div className="about">
          <div className="about-img-holder">
            <img src="/imgs/man.jpg" alt="Portfolio" className='about-img' />
          </div>
          <div className="about-caption">
            <p className="section-subtitle">Who Am I ?</p>
            <h2 className="section-title mb-3">About Me</h2>
            <p style={{fontWeight:300}}>
              I’m a passionate React developer who enjoys creating clean, efficient, and user-friendly web applications. 
              I’m always eager to learn and explore new technologies, including backend development. With knowledge in Node.js, 
              I’m expanding my skills to become proficient in full-stack development. I thrive in team environments, where I can share
              innovative ideas and collaborate to deliver high-quality solutions.
            </p>
            <button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
