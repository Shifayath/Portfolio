import styles from './page.module.css';
import '@fontsource/raleway'; // Import Raleway font
import '@fontsource/grey-qo'; // Import Grey Qo font

const Loading = () => {
  return (
    <div className={styles.loadingcontainer}>
      <div className={styles.highlightText}>
        <div className={styles.welcome}>Welcome</div>
        <div className={styles.subtitle} style={{ marginLeft: "25rem" }}>By Shifayath Khan</div>
      </div>
    </div>
  );
}
export default Loading;