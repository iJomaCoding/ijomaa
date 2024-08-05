import React from "react";
import styles from "./ProfileContent.module.css";

const ProfileContent = () => {
  return (
    <div className={styles.profileContent}>
      <h2>Personal Details</h2>
      <div className={styles.fullname}>
        <div className={`${styles.profileField} ${styles.nameBox}`}>
          <label>First Name:</label>
          <input type="text" placeholder="Enter your first name" />
        </div>
        <div className={`${styles.profileField} ${styles.nameBox}`}>
          <label>Middle Name:</label>
          <input type="text" placeholder="Enter your middle name" />
        </div>
        <div className={`${styles.profileField} ${styles.nameBox}`}>
          <label>Last Name:</label>
          <input type="text" placeholder="Enter your last name" />
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.profileField}>
        <label>Contact No:</label>
        <input type="tel" placeholder="Enter your contact number" />
      </div>
      <div className={styles.profileField}>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email address" />
      </div>
      <div className={styles.smallField}>
        {" "}
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
      </div>
      <hr className={styles.divider} />
      <h2>Address</h2>
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
        <label>Postal Code:</label>
        <input type="text" placeholder="Enter your postal code" />
      </div>
    </div>
  );
};

export default ProfileContent;
