import React from "react";

import classNames from "classnames";

import styles from "./Input.module.scss";

const Input = (props) => {
  const {
    label,
    value,
    type = "text",
    onChange,
    onSubmit = () => null,
    maxLength,
    isDisabled = false,
    isInvalid,
  } = props;

  return (
    <div className={styles.inputContainer}>
      {label ? (
        <label className={styles.label} htmlFor={label}>
          {label}
        </label>
      ) : null}

      <input
        className={classNames(`focus:border-brandBlue ${styles.input}`, {
          [styles.error]: isInvalid,
        })}
        type={type}
        id={label}
        value={value}
        onChange={(e) => onChange(e)}
        onSubmit={onSubmit}
        maxLength={maxLength}
        disabled={isDisabled}
      />
      {isInvalid && <div className={styles.errorLabel}>Invalid Password</div>}
    </div>
  );
};

export default Input;
