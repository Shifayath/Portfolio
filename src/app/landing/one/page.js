// components/PageComponent.js

import React from 'react';
import styles from './Page1.module.css';

const PageComponent = () => {
  return (
    <div className={styles.body}>
    <div className={styles.main}>
      <div className={styles.part1}>
        <div className={styles.part1Subdiv}>
          <img src="/imgs/Logo-removebg-preview.png" alt="logo" className={styles.PageLogo} />
          <div className={styles.part1Subsubdiv}>Suazanna Zipepal</div>
        </div>
      </div>

      <div className={styles.part2}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.part3}></div>

      <div className={styles.textDiv}>
        <div className={styles.Line1}></div>
        <h1>Nature</h1>
        <div className={styles.LineStable1}></div>
        <div className={styles.Line2}></div>
        <h1>Morte</h1>
        <div className={styles.LineStable2}></div>
        <div className={styles.Line3}></div>
        <h1>For</h1>
        <div className={styles.LineStable3}></div>
        <div className={styles.Line4}></div>
        <h1>Harper's</h1>
      </div>

      <div className={styles.smallImg}>
        <div className={styles.overlay1}></div>
      </div>

      {/* <div className={styles.verticalText}>
        <h1>Selection Winter</h1>
      </div> */}
    </div>
    </div>
  );
};

export default PageComponent;
