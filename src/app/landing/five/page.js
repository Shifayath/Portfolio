
'use client'
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './Page5.module.css';

gsap.registerPlugin(ScrollTrigger);

const Page5 = () => {
  useEffect(() => {
    gsap.from('#img', {
      delay: 0.4,
      opacity: 0,
      duration: 1,
      y: 60,
    });

    gsap.from('#img1', {
      delay: 0.4,
      opacity: 0,
      duration: 1,
      x: 60,
    });

    gsap.from('#img2', {
      delay: 0.4,
      opacity: 0,
      duration: 1,
      y: -60,
    });

    gsap.from('#main>h1', {
      delay: 0.4,
      opacity: 0,
      duration: 1,
    });

    gsap.from('#page2 h5,#page2 h1,#page2,#about-us,#about-us>h4', {
      opacity: 0,
      stagger: 0.4,
      scrollTrigger: {
        trigger: "#page2 h5",
        scroller: "body",
      },
    });

    // Slideshow functionality
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");

      if (slides.length === 0) return; // Ensure slides are present

      // Handle slideIndex boundaries
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }

      // Hide all slides and remove active class from dots
      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        if (slide) {
          slide.style.display = "none";
        }
      }

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        if (dot) {
          dot.className = dot.className.replace(" active", "");
        }
      }

      // Show the selected slide and set the corresponding dot as active
      if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
      }
      if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
      }
    }

    // Expose functions for slide control
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;
  }, []);

  return (
    <div>
     <div className={styles.main}>
    <div className={styles.nav}>
        <h1>this is Digital</h1>
        <div className={styles.part2}>
            <a href="#">Services</a>
            <a href="#">Work</a>
            <a href="#">About</a>
            <a href="#">Culture</a>
            <a href="#">
                <h5>Contact US
                    <img width="32" height="32" src="https://img.icons8.com/windows/32/long-arrow-right.png"
                        alt="long-arrow-right" />
                </h5>
                <div className={styles.green}></div>
            </a>
        </div>
    </div>
    <h1>digital Performance solution</h1>
    <img src="..." alt="" className={styles.img} />
    <img src="..." alt="" className={styles.img1} />
    <img src="..." alt="" className={styles.img2} />
</div>
<div className={styles.page2}>
    <h5>A Digital Performance Solutions Agency in Manchester</h5>
    <h1>We combine network agency expertise, with a highly collaborative relationship...</h1>
    <div className={styles.aboutUs}>
        <h4>About US</h4>
        <div className={styles.greendiv}>
            <img src="./arrow.png" alt="" />
        </div>
    </div>
</div>
<div className={styles.page3}>
    <div className={styles.page3left}>
        <img className={styles.page3leftImg} src="..." alt="" />
        <img className={styles.page3leftImg1} src="..." alt="" />
        <img className={styles.page3leftImg3} src="..." alt="" />
        <img className={styles.page3leftImg2} src="..." alt="" />
    </div>
    <div className={styles.page3right}>
        <h3>Your solution to digital performance.</h3>
        <div className={styles.page3rightContentdiv}>
            We want to take the pressure off for you...
        </div>
        <div className={styles.page3rightProfilediv}>
            <div className={styles.page3rightProfiledivFirst}>
                <img className={styles.profile} src="..." alt="Profile" />
                <div>Learn more about</div>
            </div>
            <div className={styles.page3rightSevicediv}>
                <div>Our Service</div>
                <img width="37" height="37" src="..." alt="long-arrow-right" />
            </div>
        </div>
    </div>
</div>
    </div>
  );
};

export default Page5;
