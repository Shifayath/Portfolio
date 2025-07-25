"use client";
import React, { useEffect, useState, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Exerience from "./components/Exerience.js";
import Education from "./components/Education.js";
import PortFolio from "./components/PortFolio.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import Loading from "./loading.js";
import { LANDINGPAGES, FIREBASEPROJECTS } from "./data/projects";
import style from "./page.module.css";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  useEffect(() => {
    let locomotiveScroll;
    if (!loading) {
      locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
    }

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, [loading]);

  return (
    <div data-scroll-orientation>
      {loading ? (
        <Loading />
      ) : (
        <main ref={scrollRef} data-scroll-container className={style.Container}>
          <div data-scroll-section>
            <Navbar />
            <Header />
            <About />
            <Services />
            <Exerience />
            <Education />
            <PortFolio
              landingPages={LANDINGPAGES}
              firebaseProjects={FIREBASEPROJECTS}
            />
            <Contact />
            <Footer />
          </div>
        </main>
      )}
    </div>
  );
}
