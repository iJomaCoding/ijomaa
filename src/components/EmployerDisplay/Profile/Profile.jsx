import React from "react";
import Header from "../Dashboard/Header";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <Header />
      <main className={styles.mainContainer}>
        <div>Profile section</div>
        <section>
          <div className={styles.inputField}>
            <label htmlFor="">Company Name:</label>
            <input type="text" placeholder="Enter your company name" />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="">First Name:</label>
            <input type="text" placeholder="Enter your first name" />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="">Middle Name:</label>
            <input type="text" placeholder="Enter your middle name" />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="">Last Name:</label>
            <input type="text" placeholder="Enter your last name" />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="">Barangay:</label>
            <input type="text" placeholder="Enter your barangay" />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="">Province:</label>
            <input type="text" placeholder="Enter your province" />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="">City:</label>
            <input type="text" placeholder="Enter your City" />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="">Postal Code:</label>
            <input type="text" placeholder="Enter your postal code" />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="">Contact Number:</label>
            <input type="text" placeholder="Enter your contact" />
          </div>
        </section>
        <button type="submit">Save</button>
      </main>
    </div>
  );
};

export default Profile;
