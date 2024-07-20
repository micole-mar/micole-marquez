import React from 'react';
import styles from './FooterStyles.module.css';
import cloudImage from '../../assets/clouds.svg'; 

function Footer() {
  return (
    <section
      id="footer"
      className={styles.container}
      style={{ backgroundImage: `url(${cloudImage})` }}
    >
      <p>designed by Micole Marquez.<br /></p>
    </section>
  );
}

export default Footer;
