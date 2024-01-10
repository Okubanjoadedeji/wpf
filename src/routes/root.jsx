
import styles from '../App.css'


function Root() {
  return (
    <div className={styles.App}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <img
            src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
            alt=""
            className={styles.logo}
          />
        </div>
        <nav className={styles["navlink-container"]}>
          <a href="/projects" className={styles.navlinks}>
            Projects
          </a>
          <a href="/about" className={styles.navlinks}>
            About
          </a>
          <a href="/contact" className={styles.navlinks}>
            Contact Us
          </a>
        </nav>
        <div>
          <a href="/" className={Classnames(styles.navlinks, styles.subscribe)}>
            Subscribe
          </a>
        </div>
      </div>
      <div className={styles["hero-section"]}>
        <div className={styles["hero-image"]}>
          <img
            src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
            alt=""
          />
        </div>
        <div className={styles["hero-info"]}>
          <h1>Hello, And Welcome To My </h1>
        </div>
      </div>
    </div>
  );
}

export default Root