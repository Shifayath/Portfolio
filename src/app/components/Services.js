"use client";
import React from "react";
import "./style.css";
function Services() {
  return (
    <section id="skills" className="skills">
      <p className="skills-subtext" style={{ fontSize: "20px" }}>
        What i do?
      </p>
      <p className="skills-subtext">
        Here are some of my skills on which I have learned.
      </p>

      <div className="skills-wraper">
        <div className="skills-category">
          <h3>Front-End</h3>
          <div className="skills-container">
            <div className="skill-item">
              <img width="35px" height="35px" src="/imgs/html.png" />
              <h4>HTML</h4>
            </div>
            <div className="skill-item">
              <img width="35px" height="35px" src="/imgs/css.png" />
              <h4>CSS</h4>
            </div>
            <div className="skill-item">
              <img width="35px" height="35px" src="/imgs/js.png" />
              <h4>JavaScript</h4>
            </div>
            <div className="skill-item">
              <img width="50px" height="50px" src="/imgs/reactjs.png" />
              <h4>React</h4>
            </div>
            <div className="skill-item">
              <img width="35px" height="35px" src="/imgs/redux.png" />
              <h4>Redux Toolkit</h4>
            </div>
            <div className="skill-item">
              <img width="35px" height="35px" src="/imgs/redux.png" />
              <h4>Redux</h4>
            </div>
            <div className="skill-item">
              <img width="50px" height="50px" src="/imgs/antd.png" />
              <h4>Ant Design</h4>
            </div>
            <div className="skill-item">
              <img width="100px" height="50px" src="/imgs/nextjs.png" />
              <h4>Next.js</h4>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3>Others</h3>
          <div className="skills-container">
            <div className="skill-item">
              <img width="100px" height="50px" src="/imgs/nodejs.png" />
              <h4>Node.js</h4>
            </div>
            <div className="skill-item">
              <img
                width="35px"
                height="35px"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519"
              />
              <h4>VS Code</h4>
            </div>
            <div className="skill-item">
              <img
                width="35px"
                height="35px"
                src="https://vitejs.dev/logo-with-shadow.png"
              />
              <h4>Chrome DevTools</h4>
            </div>
            <div className="skill-item">
              <img
                width="100px"
                height="50px"
                src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/02/chrome-devtools.jpg?fit=1200%2C600&ssl=1"
              />
              <h4>Vite</h4>
            </div>
            <div className="skill-item">
              <img
                width="120px"
                height="50px"
                src="https://cdn-public.softwarereviews.com/production/logos/offerings/8915/large/Firebase_logo.png?1734371885"
              />
              <h4>FireBase</h4>
            </div>
            <div className="skill-item">
              <img
                width="100px"
                height="50px"
                src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"
              />
              <h4>github</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
