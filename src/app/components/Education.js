'use client'
import React from 'react';
import './style.css'
function Education() {
  return (
    <section className="section" id="pricing">
      <div className="container text-center">
        <p className="section-subtitle">What have I achieved in education?</p>
        <h6 className="section-title mb-6">My Education</h6>

        <div class="contents">

          <div class="box">
            <h4>2016 - 2017</h4>
            <h3>High School</h3>
            <h3>I completed my high school education with a focus on science and mathematics, securing 70.04%. Despite facing challenges, this phase was pivotal in building my resilience and interest in analytical thinking, which later fueled my passion for technology.</h3>
          </div>

          <div class="box">
            <h4>2017 - 2020</h4>
            <h3>Intermediate (Diploma in E-Robatics)</h3>
            <h3>I pursued a Diploma in E-Robatics during my intermediate studies, where I secured 77%. This program allowed me to explore the fascinating world of robotics and electronics, providing a solid technical foundation and deepening my enthusiasm for engineering and innovation.</h3>
          </div>

          <div class="box">
            <h4>2020 - 2023</h4>
            <h3>Bachelor's Degree (B-Tech in Information Technology)</h3>
            <h3>I earned my Bachelor's Degree in Information Technology, graduating with a 7.8 CGPA. My time in this program was marked by extensive learning in software development, networking, and database management. I gained hands-on experience through various projects and developed a strong problem-solving mindset that I continue to apply in my career.</h3>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;
