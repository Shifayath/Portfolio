"use client"; // Ensures this component is client-side

import { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./Page6.module.css"; // Assuming you convert your CSS to a module

const Page6 = () => {
  useEffect(() => {
    var TL = gsap.timeline({ repeat: -1 });

    TL.to(`.${styles.imagecontainer}`, {
      ease: "Expo.easeInOut",
      width: "100%",
      stagger: 2,
    }, "Animation")
      .to(`.${styles.text} > h1`, {
        ease: "Expo.easeInOut",
        stagger: 2,
        top: 0,
      }, "Animation")
      .to(`.${styles.text} > h1`, {
        delay: 2,
        ease: "Expo.easeInOut",
        stagger: 2,
        top: "-100%",
      }, "Animation")
      .to(`#${styles.nav} > div`, {
        ease: "Expo.easeInOut",
        stagger: 2,
        css: {
          borderLeft: "3px solid #000",
        },
      }, "Animation")
      .to(`#${styles.nav} > div`, {
        delay: 2,
        ease: "Expo.easeInOut",
        stagger: 2,
        css: {
          borderLeft: "3px solid #747373",
        },
      }, "Animation");
  }, []);

  return (
    <div id={styles.main}>
      <div id={styles.center}>
        <div id={styles.NavBar}>
          <h2>Brand Name.</h2>
          <div id={styles.nav}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.text}>
          <h1>Floor.</h1>
          <h1>Silk.</h1>
          <h1>Blocks.</h1>
        </div>
        
        <div className={styles.imagecontainer} >
          <img
            src="https://images.unsplash.com/photo-1632292220916-e9c34dd75db2?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
width={"100%"}
          />
        </div>
        <div className={styles.imagecontainer}>
          <img
            src="https://images.unsplash.com/photo-1633432695467-66403aa96bfd?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={"100%"}
          />
        </div>
        <div className={styles.imagecontainer}>
          <img
            src="https://images.unsplash.com/photo-1643028468558-2082eb119131?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={"100%"}
          />
        </div>
        <div id={styles.OtherNav} style={{position:"absolute",top:"55px", right:"-100px"}}>
          <div>
            <img src="/imgs/menu.png" alt="Menu" width={30} height={30} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <img src="/imgs/instagram.png" alt="Instagram" width={30} height={30} />
            <img src="/imgs/pinterest.png" alt="Pinterest" width={30} height={30} />
            <img src="/imgs/twitter.png" alt="Twitter" width={30} height={30} />
            <img src="/imgs/facebook.png" alt="Facebook" width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
