import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './SkillListStyles.module.css';

function SkillList({ skills }) {
  return (
    <div className={styles.skillList}>
      {skills.map((skill, index) => (
        <span key={index} className={styles.skillItem}>
          <FontAwesomeIcon icon={faCheck} className={styles.icon} />
          <p>{skill}</p>
        </span>
      ))}
    </div>
  );
}

export default SkillList;
