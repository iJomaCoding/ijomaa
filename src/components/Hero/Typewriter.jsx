import React, { useState, useEffect } from "react";
import styles from "./Typewriter.module.css"; // Make sure the path is correct

const Typewriter = ({ texts, speed, delay }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setDisplayedText((prev) => prev + texts[textIndex].charAt(index));
      index++;
      if (index >= texts[textIndex].length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          eraseText();
        }, delay);
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [textIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Toggle cursor visibility every 500ms

    return () => clearInterval(cursorInterval);
  }, []);

  const eraseText = () => {
    let index = texts[textIndex].length;
    const eraseInterval = setInterval(() => {
      setDisplayedText((prev) => prev.slice(0, -1));
      index--;
      if (index <= 0) {
        clearInterval(eraseInterval);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, speed);
  };

  return (
    <span className={styles.typewriter}>
      {displayedText}
      <div className={showCursor ? styles.cursor : ""}></div>
    </span>
  );
};

export default Typewriter;
