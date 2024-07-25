import React from "react";
import styles from "./Profile.module.css";
import ProfileImage from "./ProfileImage";
import ProfileContent from "./ProfileContent";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <h2>Profile</h2>
      <ProfileImage />
      <ProfileContent />
    </div>
  );
};

export default Profile;
