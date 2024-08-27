import React from 'react';
import Head from 'next/head';
import styles from './Page2.module.css';

const PageLayout = () => {
  return (
    <>
      <Head>
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />
      </Head>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.lnav}>
            <i className="ri-arrow-left-line"></i>
            <div className={styles.lnavright}>
              <a href="">Home</a>
              <a href="">Work</a>
              <i className="ri-twitter-fill"></i>
            </div>
          </div>
          <div className={styles.textcenter}>
            <h1>Hello,</h1>
            <p>Oh you need a little dummy text for your Makeup? How quaint</p>
            <a>Read</a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rtop}>
            <div className={styles.rtopsub1}></div>
            <div className={styles.rtopsub2}></div>
          </div>
          <div className={styles.rbottom}></div>
        </div>
      </div>
    </>
  );
};

export default PageLayout;
