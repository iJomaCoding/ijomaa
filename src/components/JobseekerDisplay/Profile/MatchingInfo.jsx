import React, { useState } from "react";
import styles from "./ProfileContent.module.css";

const MatchingInfo = () => {
  const [skills, setSkills] = useState([
    { type: "Technical Skills", value: "", scale: 50 },
    { type: "Core Skills", value: "", scale: 50 },
    { type: "Soft Skills", value: "", scale: 50 },
    { type: "Experience", value: "", scale: 50 },
  ]);

  const addSkill = () => {
    setSkills([...skills, { type: "Other Skill", value: "", scale: 50 }]);
  };

  const handleSkillChange = (index, field, value) => {
    const newSkills = [...skills];
    newSkills[index][field] = value;
    setSkills(newSkills);
  };

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

      {skills.map((skill, index) => (
        <div key={index} className={styles.profileField}>
          <label>{skill.type}:</label>
          <textarea
            placeholder={`Enter your ${skill.type.toLowerCase()}`}
            value={skill.value}
            onChange={(e) => handleSkillChange(index, "value", e.target.value)}
          ></textarea>
          <input
            type="range"
            min="0"
            max="100"
            step="10"
            value={skill.scale}
            onChange={(e) => handleSkillChange(index, "scale", e.target.value)}
            className={styles.slider}
            style={{
              background: `linear-gradient(to right, #1a2a46 ${skill.scale}%, #ccc ${skill.scale}%)`,
            }}
          />
          <span>Proficiency: {skill.scale}%</span>
        </div>
      ))}

      <button type="button" className={styles.addButton} onClick={addSkill}>
        Add Other Skill
      </button>

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
