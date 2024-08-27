"use client"
import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import styles from './Page9.module.css';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';

const HomePage = () => {
  useEffect(() => {
    // Function to initialize LocomotiveScroll and GSAP animations
    const initializeScrollAndAnimations = () => {
      const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
      });

      // GSAP loading animation
      const loading = () => {
        const tl = gsap.timeline();

        tl.to("#yellow", {
          top: '-100%',
          delay: 0.2,
          duration: 1,
          ease: 'expo.out'
        })
        .from("#yellowAgain", {
          top: '100%',
          delay: 0.6,
          duration: 0.5,
          ease: 'expo.out'
        }, 'anim')
        .to('#loader h1', {
          color: "black",
          delay: 0.1,
          duration: 0.5
        }, 'anim')
        .to('#loader', {
          display: 'none',
        });
      };
      
      loading();

      // Event listeners for .elem elements
      const elems = document.querySelectorAll(".elem");
      const page2 = document.querySelector('#page2');

      elems.forEach(item => {
        item.addEventListener("mouseenter", () => {
          const bgimg = item.getAttribute('data-img');
          page2.style.backgroundImage = `url(${bgimg})`;
        });
      });
    };

    // Run the initialization function
    initializeScrollAndAnimations();

    // Cleanup function to remove event listeners (optional)
    return () => {
      // Clean up code if necessary
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />
      </Head>
      <div id="loader" className={styles.loader}>
        <div id="yellow" className={styles.yellow}></div>
        <video autoPlay loop muted src="https://works.studio/uploads/images/home/4_version1_200911_024106.mp4"></video>
        <div id="yellowAgain" className={styles.yellowAgain}></div>
        <h1>
          <div>
            <em>We</em><em> are a </em>CREATIVE<em> studio<br /></em>
            DEDICATED <em>to </em>CULTURAL<br />
            ADVANCEMENT <em>through</em> <br />
            STRATEGY <em>and </em>DESIGN.
          </div>
        </h1>
      </div>
      <div id="nav" className={styles.nav}>
        <svg className={styles.coreLogo} xmlns="http://www.w3.org/2000/svg" width="94" height="21" viewBox="0 0 94 21">
          <path fill="#FFFFFF" d="M4.96428634,19.7404847 L10.4624983,19.7404847 ... Z"></path>
        </svg>
        <div>
          <h1>Project</h1>
          <h1>About</h1>
          <h1>Studies</h1>
        </div>
      </div>
      <div id="main" data-scroll-container>
        <div id="page1" data-scroll data-scroll-speed="1">
          <h1>
            <div>
              <em>We</em><em> are a </em>CREATIVE<em> studio<br /></em>
              DEDICATED <em>to </em>CULTURAL<br />
              ADVANCEMENT <em>through</em> <br />
              STRATEGY <em>and </em>DESIGN.
            </div>
          </h1>
        </div>
        <div id="page2" data-scroll data-scroll-speed="0">
          {/* Similar div structure for .elem */}
        </div>
        {/* More pages */}
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js" strategy="afterInteractive"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js" strategy="afterInteractive"></Script>
    </>
  );
};

export default HomePage;
