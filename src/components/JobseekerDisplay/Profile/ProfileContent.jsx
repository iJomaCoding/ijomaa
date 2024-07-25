import React from "react";
import styles from "./ProfileContent.module.css";

const ProfileContent = () => {
  return (
    <div className={styles.profileContent}>
      <div className={styles.profileField}>
        <label>First Name:</label>
        <input type="text" placeholder="Enter your first name" />
      </div>
      <div className={styles.profileField}>
        <label>Middle Name:</label>
        <input type="text" placeholder="Enter your middle name" />
      </div>
      <div className={styles.profileField}>
        <label>Last Name:</label>
        <input type="text" placeholder="Enter your last name" />
      </div>
      <div className={styles.profileField}>
        <label>Birthday:</label>
        <input type="date" />
      </div>
      <div className={styles.profileField}>
        <label>Gender:</label>
        <select>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className={styles.profileField}>
        <label>Barangay:</label>
        <input type="text" placeholder="Enter your barangay" />
      </div>
      <div className={styles.profileField}>
        <label>Province:</label>
        <input type="text" placeholder="Enter your province" />
      </div>
      <div className={styles.profileField}>
        <label>City:</label>
        <input type="text" placeholder="Enter your city" />
      </div>
      <div className={styles.profileField}>
        <label>Contact No:</label>
        <input type="tel" placeholder="Enter your contact number" />
      </div>
      <div className={styles.profileField}>
        <label>Postal Code:</label>
        <input type="text" placeholder="Enter your postal code" />
      </div>
      <div className={styles.profileField}>
        <label>Job Title:</label>
        <input type="text" placeholder="Enter your job title" />
      </div>
      <div className={styles.profileField}>
        <label>Education:</label>
        <input type="text" placeholder="Enter your education" />
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
      <div className={styles.profileField}>
        <label>Certification Description:</label>
        <textarea placeholder="Enter your certification description"></textarea>
      </div>
      <div className={styles.profileField}>
        <label>Certification:</label>
        <textarea placeholder="Enter your certification"></textarea>
      </div>
      <button className={styles.saveBtn}>Save</button>
    </div>
  );
};

export default ProfileContent;
