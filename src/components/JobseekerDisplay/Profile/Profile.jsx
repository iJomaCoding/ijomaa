import React from "react";
import styles from "./Profile.module.css";
import ProfileImage from "./ProfileImage";
import ProfileContent from "./ProfileContent";
import MatchingInfo from "./MatchingInfo";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <ProfileImage />
      <ProfileContent />
      <MatchingInfo />

      <button type="submit" className={styles.saveBtn}>
        Save
      </button>
    </div>
  );
};

export default Profile;
