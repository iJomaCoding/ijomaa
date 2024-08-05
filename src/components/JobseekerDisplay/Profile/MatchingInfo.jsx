import React from "react";
import styles from "./ProfileContent.module.css";

const MatchingInfo = () => {
  return (
    <div className={styles.profileContent}>
      <div className={styles.profileField}>
        <label>Highest Educational Attainment:</label>
        <select>
          <option value="">None</option>
          <option value="highschool">High School</option>
          <option value="associate">Associate Degree</option>
          <option value="bachelor">Bachelor's Degree</option>
          <option value="master">Master's Degree</option>
          <option value="doctorate">Doctorate Degree</option>
          <option value="other">Other</option>
        </select>
      </div>

      <hr className={styles.divider} />
      <div className={styles.profileField}>
        <label>Job Title:</label>
        <input type="text" placeholder="Enter your job title" />
      </div>

      <div className={styles.profileField}>
        <label>Technical Skills:</label>
        <textarea placeholder="Enter your technical skills"></textarea>
      </div>
      <div className={styles.profileField}>
        <label>Core Skills:</label>
        <textarea placeholder="Enter your core skills"></textarea>
      </div>
      <div className={styles.profileField}>
        <label>Soft Skills:</label>
        <textarea placeholder="Enter your soft skills"></textarea>
      </div>
      <div className={styles.profileField}>
        <label>Experience:</label>
        <textarea placeholder="Enter your experience"></textarea>
      </div>

      <hr className={styles.divider} />

      <div className={styles.profileField}>
        <label>Certification:</label>
        <input className={styles.certification} type="file" />
      </div>
      <div className={styles.profileField}>
        <label>Certification Description:</label>
        <textarea placeholder="Enter your certification description"></textarea>
      </div>
    </div>
  );
};

export default MatchingInfo;
