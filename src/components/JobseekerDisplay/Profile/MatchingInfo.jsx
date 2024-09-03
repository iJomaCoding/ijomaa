import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./ProfileContent.module.css";

const MatchingInfo = () => {
  const [skills, setSkills] = useState([]);

  const addSkill = (type, description = "") => {
    setSkills([
      ...skills,
      { id: uuidv4(), type, description, value: "", scale: 0 },
    ]);
  };

  const handleSkillChange = (id, field, value) => {
    const newSkills = skills.map((skill) =>
      skill.id === id ? { ...skill, [field]: value } : skill
    );
    setSkills(newSkills);
  };

  const renderSkillsByType = (type) => {
    return skills
      .filter((skill) => skill.type === type)
      .map((skill) => (
        <div key={skill.id} className={styles.profileField}>
          <label>{skill.type}:</label>
          {skill.description && <p>{skill.description}</p>}
          <textarea
            placeholder={`Enter your ${skill.type.toLowerCase()}`}
            value={skill.value}
            onChange={(e) =>
              handleSkillChange(skill.id, "value", e.target.value)
            }
          ></textarea>
          <input
            type="range"
            min="0"
            max="100"
            step="10"
            value={skill.scale}
            onChange={(e) =>
              handleSkillChange(skill.id, "scale", parseInt(e.target.value, 10))
            }
            className={styles.slider}
            style={{
              background: `linear-gradient(to right, #1a2a46 ${skill.scale}%, #ccc ${skill.scale}%)`,
            }}
          />
          <span>Weight: {skill.scale}%</span>
        </div>
      ));
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

      {["Technical Skills", "Core Skills", "Soft Skills", "Experience"].map(
        (type) => (
          <div key={type}>
            {renderSkillsByType(type)}
            <button
              type="button"
              className={styles.addButton}
              onClick={() => addSkill(type)}
            >
              Add {type}
            </button>
            <hr className={styles.divider} /> {/* Divider below each button */}
          </div>
        )
      )}

      {/* Custom Skill Section */}
      <div>
        {renderSkillsByType("Other Skill")}

        <button
          type="button"
          className={styles.addButton}
          onClick={() => addSkill("Other Skill", "")}
        >
          Add Other Skill Type
        </button>
      </div>

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
