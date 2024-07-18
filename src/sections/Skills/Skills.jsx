import React from 'react';
import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.sectionTitle}>Skills</h1>
      <div className={styles.skillCategories}>
        <div className={styles.skillCategory}>
          <h2>Technical Skills</h2>
          <div className={styles.skillSubCategories}>
            <div className={styles.skillSubCategory}>
              <h3>Software Development</h3>
              <SkillList skills={['Java', 'Python', '.NET, C#', 'HTML/CSS/JavaScript', 'React Framework']} />
            </div>
            <div className={styles.skillSubCategory}>
              <h3>Data Skills</h3>
              <SkillList skills={['SQL', 'Python Pandas', 'Microsoft Excel', 'Tableau', 'Databases']} />
            </div>
            <div className={styles.skillSubCategory}>
              <h3>Other Skills</h3>
              <SkillList skills={['AWS', 'Cloud Computing Basics', 'GitHub', 'Agile Methodologies', 'Networking Fundamentals']} />
            </div>
          </div>
        </div>
        <hr className={styles.separator} />
        <div className={styles.skillCategory}>
          <h2>Soft Skills</h2>
          <SkillList skills={['Active-listening', 'Communication', 'Teamwork', 'Problem-Solving', 'Adaptability']} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
