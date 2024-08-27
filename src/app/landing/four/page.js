import React from 'react';
import styles from './Page4.module.css'; // Import CSS module

const PageComponent = () => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.overlay}>
          <div className={styles.text}>
            <h1>Noise</h1>
            <div className={styles.textright}>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident iusto ex eum nam! Labore, esse unde ea obcaecati, rem repudiandae error nam culpa consequuntur deleniti voluptate velit quasi, asperiores sit!</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident iusto ex eum nam! Labore, esse unde ea obcaecati, rem repudiandae error nam culpa consequuntur deleniti voluptate velit quasi, asperiores sit!</p>
              <div className={styles.icons}>
                <i className="ri-instagram-fill"></i>
                <i className="ri-twitter-x-fill"></i>
                <i className="ri-facebook-fill"></i>
                <i className="ri-youtube-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottom1}>
          <h3>Latest News</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas id, tempora provident debitis maxime dicta! Atque ea iusto illum sed sapiente doloremque rerum odit dolore, adipisci laborum, cupiditate qui. Doloribus.</p>
        </div>
        <div className={styles.bottom2}></div>
        <div className={styles.bottom3}>
          <div className={styles.bottom3top}>
            <h3>Alert</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi modi molestias odio asperiores,</p>
          </div>
          <div className={styles.bottom3bottom}></div>
        </div>
        <div className={styles.bottom4}>
          <h3>Latest</h3>
          <div className={styles.notf}>
            <div className={styles.photo}></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facilis asperiores earum, architecto saepe doloremque optio dolore enim neque, dolor, iure eveniet. Alias culpa vitae ab nobis impedit molestiae expedita.</p>
          </div>
          <div className={styles.notf}>
            <div className={styles.photo}></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facilis asperiores earum, architecto saepe doloremque optio dolore enim neque, dolor, iure eveniet. Alias culpa vitae ab nobis impedit molestiae expedita.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageComponent;
