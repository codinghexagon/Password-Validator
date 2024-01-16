import React from "react";

import styles from "./buttons.module.scss";

const TextButton = (props) => {
  const { text, onClick, className, disabled, type = "button" } = props;
  return (
    <div className={`${styles.btnContainer} ${styles.btnTextContainer}`}>
      <button
        className={`${styles.btn} ${styles.btnText} ${className}`}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

export default TextButton;
