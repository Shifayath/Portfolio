import React from 'react';
import Head from 'next/head';
import styles from './Page3.module.css';

const ScrollEffect = () => {
  return (
    <>
      <Head>
        <title>Document</title>
      </Head>
      <div className={styles.main}>
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h1 className={styles.text}>
          We're a content creation team and we're going to make some cool stuff
          for you
        </h1>
        <div className={styles.scrollDiv}>
          <h1>Brand</h1>
          <h1>Brand</h1>
          <h1>Brand</h1>
          <h1>Brand</h1>
        </div>
        <div className={styles.scrollDiv2}>
          <h1>Brand</h1>
          <h1>Brand</h1>
          <h1>Brand</h1>
          <h1>Brand</h1>
        </div>
        <div className={styles.scrollDiv3}>
          <h1>Brand</h1>
          <h1>Brand</h1>
          <h1>Brand</h1>
          <h1>Brand</h1>
        </div>
      </div>
    </>
  );
};

export default ScrollEffect;
