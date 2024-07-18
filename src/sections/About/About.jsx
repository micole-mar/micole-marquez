import React from 'react';
import styles from './AboutStyles.module.css';
import profileImg from '../../assets/profile-img.svg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCloud, faBriefcase, faStar } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <section id="about" className={styles.container}>
      <p className={styles.subtitle}>Get to Know More</p>
      <h1 className={styles.sectionTitle}>About Me</h1>
      <img src={profileImg} alt="Profile" className={styles.profileImg} />
      <div className={styles.infoContainer}>
          <div className={styles.infoCard}>
              <span className={styles.icon}><FontAwesomeIcon icon={faGraduationCap} /></span>
              <h3>Education</h3>
              <p>Feb 2022 - Present</p>
              <p>BCom/BSc Conjoint</p>
              <p className={styles.desc}>Business Analytics, Information Systems, Computer Science</p>
          </div>
          <div className={styles.infoCard}>
              <span className={styles.icon}><FontAwesomeIcon icon={faCloud} /></span>
              <h3>Certification</h3>
              <p>AWS Cloud Practitioner Certification</p>
              <p className={styles.desc}>Completed through the Summer of Cloud Program by NextWork partnered with Summer of Tech</p>
          </div>
          <div className={styles.infoCard}>
              <span className={styles.icon}><FontAwesomeIcon icon={faBriefcase} /></span>
              <h3>Experience</h3>
              <p>Private Tutor, MyTuition</p>
              <p className={styles.desc}>Mar 2023 - Present</p>
              <p>Salesperson, JB Hi-Fi</p>
              <p className={styles.desc}>Dec 2023 - Jan 2024</p>
          </div>
          <div className={styles.infoCard}>
              <span className={styles.icon}><FontAwesomeIcon icon={faStar} /></span>
              <h3>Interests</h3>
              <p>Software Development</p>
              <p className={styles.desc}>Passionate about coding and technology</p>
          </div>
      </div>
      <p className={styles.description}>
        Driven by a strong interest in numbers and problem-solving, I am drawn to the impactful role of technology and data. With skills in agile methodologies, software development, and data analytics, I am prepared to contribute to the tech industry. Eager to grow and learn, I am continually seeking new opportunities to expand my expertise and make a positive impact.
    </p>
    </section>
  );
}

export default About;
